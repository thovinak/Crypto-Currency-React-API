import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
const Navbar = ({ onFeaturedClick, onGraphClick, onContactClick }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Crypto<span className="primary">Finance </span>
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
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
        <div className="btn-group">
          <button className="btn">Contact</button>
        </div>
        <div className="ham-burger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
