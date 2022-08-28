import React, { useState, useEffect } from 'react'
import axios from 'axios';


const withEditableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [originalUser, setOriginalUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
        setLoading(false);
      })();
    }, []);

    const onChangeUser = changes => {
      setUser({...user,  ...changes})
    }

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user }) 
      setOriginalUser(response.data)
      setUser(response.data)  
    }
    
    const onResetUser = async () => {
      setUser(originalUser)  
    }

    return !loading ? <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser}/> : <p>Loading...</p>
  }
}

export default withEditableUser