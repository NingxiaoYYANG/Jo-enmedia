import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css'; 

function Header() {
    return (
        <header className="pc-header">
            <div className="logo-wrapper">
                <Link to="/" id="logo">
                    <img src="images/comp_logo.png" alt="TK Plus Logo" />
                </Link>
            </div>
            <div className='button-section'>
                <NavLink exact to="/" activeClassName="active" className="cta-button-h">Home</NavLink>
                <NavLink to="/about" activeClassName="active" className="cta-button-h">About Us</NavLink>
                <NavLink to="/work" activeClassName="active" className="cta-button-h">Our Work</NavLink>
                <Link to="/contact" activeClassName="active" className="cta-button-contact">Contact us</Link>
            </div>
               
        </header>
    );
}

export default Header;
