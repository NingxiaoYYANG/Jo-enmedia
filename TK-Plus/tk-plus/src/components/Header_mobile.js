import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header_mobile.css';

const HeaderMobile = () => {
  // State to handle menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="images/comp_logo.png" alt="Jo-En Media Logo" />
        </div>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
            <li><NavLink exact to="/" activeClassName="active" className="cta-button-h">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className="cta-button-h">About Us</NavLink></li>
            <li><NavLink to="/work" activeClassName="active" className="cta-button-h">Our Work</NavLink></li>
            <li><Link to="/contact" className="contact-btn">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
