import React from 'react'

const printProps = Component => {
  return (props) => {
    console.log(props);
    return <Component {...props} />
  }
}

export default printProps