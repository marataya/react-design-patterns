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
      <li><Link to='/resourceloader_user_datasource'>ResourceLoader_User DS</Link></li>
      <li><Link to='/resourceloader_product_datasource'>ResourceLoader_Product DS</Link></li>
      <li><Link to='/resourceloader_user'>ResourceLoader_User</Link></li>
      <li><Link to='/resourceloader_product'>ResourceLoader_Product</Link></li>
    </ul>
  )
}

export default NavBar