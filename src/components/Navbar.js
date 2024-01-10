import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
const Navbar = ({ onHomeClick, onFeaturedClick, onGraphClick, onContactClick }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          <a href="#/" onClick={onHomeClick}>Crypto<span className="primary">Finance </span> </a>
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#/" onClick={onHomeClick}>Home</a>
        </li>

          <li>
          <a href="#/" onClick={onFeaturedClick}>Crypto Information</a>
        </li>

        <li>
          <a href="#/" onClick={onGraphClick}>Charts</a>
        </li>
        <li>
          <a href="#/" onClick={onContactClick}>Contact</a>
        </li>
        </ul>
        {/* <div className="btn-group">
        <a href="#/" onClick={onContactClick}>Contact</a>
        </div> */}
        <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
      </div>
    </div>
  );
};

export default Navbar;
