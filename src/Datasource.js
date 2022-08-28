import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const DataSource = ({ getDataFunc = () => { }, resourceName, children }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);


  useEffect(() => {
    setLoading(true);
    (async () => {
      let async = false;
      if (getDataFunc.constructor.name === "AsyncFunction") {
        async = true
      }
      const { data, controller } = async ? await getDataFunc() : getDataFunc();
      setData(data)
      setLoading(false);
      return () => { controller?.abort() };
    })();
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