import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <ul style={{border: "1px solid green"}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/list'>List Layout</Link></li>
      <li><Link to='/uncontrolled_modal'>Uncontrolled Modal</Link></li>
      <li><Link to='/controlled_modal'>Controlled Modal</Link></li>
      <li><Link to='/currentuserloader'>CurrentUserLoader</Link></li>
      <li><Link to='/userloader'>UserLoader</Link></li>
      <li><Link to='/datasource_user'>DataSource-User</Link></li>
      <li><Link to='/datasource_product'>DataSource-Product</Link></li>
      <li><Link to='/datasource_localstorage'>DataSource-LocalStorage</Link></li>
      <li><Link to='/resourceloader_user'>ResourceLoader-User</Link></li>
      <li><Link to='/resourceloader_product'>ResourceLoader-Product</Link></li>
      <li><Link to='/uncontrolled_form'>Uncontrolled Form</Link></li>
      <li><Link to='/controlled_form'>Controlled Form</Link></li>
      <li><Link to='/uncontrolled_onboarding'>Uncontrolled Onboarding Flow</Link></li>
      <li><Link to='/controlled_onboarding'>Controlled Onboarding Flow</Link></li>
      <li><Link to='/printprops'>printProps HOC</Link></li>
      <li><Link to='/edit_user'>Edit User HOC</Link></li>
      <li><Link to='/edit_user_v2'>Edit User HOC-V2</Link></li>
      <li><Link to='/recursive_component'>Recursive Component</Link></li>
    </ul>
  )
}

export default NavBar