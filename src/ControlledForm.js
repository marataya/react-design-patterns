import React, { useState } from 'react'
import { useEffect } from 'react';
import { createRef } from 'react';

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState('');

  const handleSubmit = (e) => {

  }

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError('Name must at least 3 characters');
    }
    else setNameInputError('');
  }, [name])

  return (
    <>
      {nameInputError ? <p>{nameInputError}</p> : ""}
      <form>
        <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input name="hairColor" type="text" placeholder="Hair Color" value={hairColor} onChange={e => setHairColor(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlledForm