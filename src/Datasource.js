import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setData(data)
    })();
  }, [])

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data });
        }
        return child;
      })}
    </>
  )
}