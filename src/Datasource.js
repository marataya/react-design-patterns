import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const DataSource = ({ getDataFunc = () => { }, resourceName, children }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const mounted = useRef(false);


  useEffect(() => {
    mounted.current = true;
    setLoading(true);
    (async () => {
      const data = await getDataFunc();
      if (mounted.current === true) {
        setData(data)
      }
      setLoading(false)
    })();
    return () => {mounted.current = false;}
  }, [getDataFunc])

  return (
    <>
      {!isLoading ?
        (React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: data });
          }
          return child;
        }))
        : <p>Loading...</p>
      }
    </>
  )
}