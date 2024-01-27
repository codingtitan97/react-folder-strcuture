// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <img className="logo" src="your-logo.png" alt="Logo" />
        <div className="location-search-container">
          <div className="location-icon">📍</div>
          <input className="location-search-input" type="text" placeholder="Search location" />
        </div>
      </div>
      <div className="right-side">
        <div className="cart-icon">🛒</div>
        <div className="profile-icon">👤</div>
      </div>
    </div>
  );
};

export default Navbar;
