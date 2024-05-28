import React from 'react';
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
      </ul>
    </div>
  );
}

export default Navbar;
