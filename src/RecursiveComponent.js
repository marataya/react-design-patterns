import React from 'react'

const isObject = x => typeof x === 'object' && x !== null;

const RecursiveComponent = ({ data }) => {
  console.log(data);
  if (!isObject(data)) {
    return (
      <li>{data}</li>
    );
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([k, v]) => (
        <li>
          {k}:
          <ul>
            <RecursiveComponent data={v} />
          </ul>
        </li>
      ))}
    </>
  )

}

export default RecursiveComponent
