import React, { useState, useEffect } from 'react'
import axios from 'axios';


const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      (async () => {
        const response = await axios.get(`/users/${userId}`)
        setUser(response.data)
        setLoading(false);
      })();
    }, []);

    return !loading ? <Component {...props} user={user}/> : <p>Loading...</p>
  }
}

export default withUser