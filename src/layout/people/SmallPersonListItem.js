import React from 'react'

const SmallPersonList = ({person}) => {
  const {name, age} = person;
  return (
    <div>name: {name}, age: {age}</div>
  )
}

export default SmallPersonList