import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import img from './logo1.jpg'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={img} />
      </div>
      <ul className='list'>
        <li>
          <Link  to="/home">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link className='active' to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
