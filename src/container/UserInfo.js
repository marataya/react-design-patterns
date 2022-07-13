export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  console.log('UserInfo', user);
  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies?.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  )
}

// import React, { Component } from 'react'

// export default class UserInfo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: null,
//       age: null,
//       hairColor: null,
//       hobbies: null
//     }
//   }

//   initChild = () => {
//     console.log(this.props.user);
//     if (this.props.user) {
//       this.setState({
//         user: this.props.user
//       })
//     }
//   }
  
//   componentDidUpdate() {
//     this.initChild()
//   }

//   render() {
//     return this.state.user ? (
//       <>
//         <h3>{name}</h3>
//         <p>{age}</p>
//         <p>{hairColor}</p>
//         <h3>Hobbies</h3>
//         <ul>
//           {hobbies?.map(hobby => <li key={hobby}>{hobby}</li>)}
//         </ul>
//       </>
//     ) : <p></p>
//   }
// }
