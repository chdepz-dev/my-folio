import React, { useState } from 'react';
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`nav ${isOpen ? 'open' : ''}`}>
      <div className={`logo ${isOpen? "open" : ""}`}>
        <h1>CHDEPZ.</h1>
      </div>
      <div className='menu-toggle' onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
