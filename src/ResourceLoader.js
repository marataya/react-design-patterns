import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  // console.log(location);

  const fetchData = async () => {
    setLoading(true);

    const controller = new AbortController();

    axios.get('http://localhost:8080' + resourceUrl, { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }

  useEffect(() => {
    fetchData()
  }, [resourceUrl])

  return (
    <>
      {!isLoading ? 
          (React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              console.log({[resourceName]:data})
              return React.cloneElement(child, { [resourceName]:data });
            }
            return child;
          }))
         : <p>Loading...</p>}
    </>
  )
}