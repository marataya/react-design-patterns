import React, { useState, useEffect } from 'react'
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [originalData, setOriginalData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
        setLoading(false);
      })();
    }, []);

    const onChange = changes => {
      setData({ ...data, ...changes })
    }

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    }

    const onReset = async () => {
      setData(originalData);
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`] : onChange,
      [`onSave${capitalize(resourceName)}`] : onSave,
      [`onReset${capitalize(resourceName)}`] : onReset,
    }

    return !loading ? <Component {...props} {...resourceProps} /> : <p>Loading...</p> 
  }
}

export default withEditableResource