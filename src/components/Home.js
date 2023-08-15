import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import logo from '../images/logo.png' 
function Home() {
  return (
    <div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h3 className='title'>SHOP-KART</h3>
      <Link to="/login">
        <button className="open-inventory-button">Login</button>
      </Link>
    </div>
  )
}

export default Home