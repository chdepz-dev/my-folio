import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`nav ${isOpen ? "open" : ""}`}>
      <div className={`logo ${isOpen ? "open" : ""}`}>
        <Link to="/" style={{ textDecoration: "none" }} onClick={closeMenu}>
          <h1>CHDEPZ.</h1>
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => {
                closeMenu();
              }}
              className={({ isActive }) =>
                `link ${isActive ? "active" : ""}`
              }>
                Home
              </NavLink>
          </li>
          <li>
            <NavLink
              to="/allprojects"
              style={{ textDecoration: "none" }}
              onClick={() => {
                closeMenu();
              }}
              className={({ isActive }) =>
                `link ${isActive ? "active" : ""}`
              }>
               All Projects
              </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-form"
              style={{ textDecoration: "none" }}
              onClick={() => {
                closeMenu();
              }}
              className={({ isActive }) =>
                `link ${isActive ? "active" : ""}`
              }>
               Contact
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
