import React from 'react'
import './navbar.css'

function Header (props) {
  return (
    <div>
      <div style={{backgroundColor:props.bgMain}} className="header">
       <h1>E-HEADPHONES</h1>
       <ul className="ul_nav">
        <li className="nav_li"><a href='index.html' className="nav_a">Home</a></li>
        <li className="nav_li"><a href='index.html' className="nav_a">Products</a></li>
        <li className="nav_li"><a href='index.html' className="nav_a">Stores</a></li>
        <li className="nav_li"><a href='index.html' className="nav_a">Clients</a></li>
        <li className="nav_li"><a href='index.html' className="nav_a">Contacts</a></li>
        <li className="nav_li"><a href='index.html' className="nav_a">About us</a></li>
       </ul>
      </div>
    </div>
  )
}

export default Header
