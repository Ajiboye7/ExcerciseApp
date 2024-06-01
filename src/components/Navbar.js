/*import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import '../style/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/practical" activeClassName="active">Exercise</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
*/import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg';

import '../style/Navbar.css'; 

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <button className="toggle-button" onClick={toggleLinks}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className={showLinks ? 'nav-links active' : 'nav-links'}>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/practical" activeClassName="active">Exercise</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;




