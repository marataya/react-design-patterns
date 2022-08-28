import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <ul style={{border: "1px solid green"}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/list'>List Layout</Link></li>
      <li><Link to='/modal'>Modal Layout</Link></li>
      <li><Link to='/currentuserloader'>CurrentUserLoader</Link></li>
      <li><Link to='/userloader'>UserLoader</Link></li>
      <li><Link to='/datasource_user'>DataSource-User</Link></li>
      <li><Link to='/datasource_product'>DataSource-Product</Link></li>
      <li><Link to='/datasource_localstorage'>DataSource-LocalStorage</Link></li>
      <li><Link to='/resourceloader_user'>ResourceLoader-User</Link></li>
      <li><Link to='/resourceloader_product'>ResourceLoader-Product</Link></li>
    </ul>
  )
}

export default NavBar