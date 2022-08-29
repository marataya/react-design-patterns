import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

const useResource = resourceUrl => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl)
      setResource(response.data)
    })();
  }, [resourceUrl]);

  return resource;
}

export default useResource