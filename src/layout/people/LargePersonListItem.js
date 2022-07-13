import React from 'react'

const LargePersonList = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  )
}

export default LargePersonList