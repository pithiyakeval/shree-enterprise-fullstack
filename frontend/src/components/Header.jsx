import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaTools, FaLifeRing, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Shree Enterprise Logo" className="logo-img" />
          <h1 className="logo-text">Shree Enterprise</h1>
        </NavLink>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <nav className="hamburger-menu">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            <FaHome style={{ marginRight: '6px' }} /> Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            <FaInfoCircle style={{ marginRight: '6px' }} /> About Us
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>
            <FaTools style={{ marginRight: '6px' }} /> Services
          </NavLink>
          <NavLink to="/help" className="nav-link" onClick={closeMenu}>
            <FaLifeRing style={{ marginRight: '6px' }} /> Help
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            <FaPhone style={{ marginRight: '6px' }} /> Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
