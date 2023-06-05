import React from 'react'
import './header.css'
let itemCount = 0;
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
       <div className="cart">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
           <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg>
        <div className="iconCount">{itemCount}</div>
       </div>
      </div>
    </div>
  )
}

export default Header
