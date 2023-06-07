import React from 'react'
import './NavBar.css'
import CardWidget from './CardWidget.js'

function NavBar (props) {
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
       <CardWidget className="CardWidget"/>
      </div>
    </div>
  )
}

export default NavBar
