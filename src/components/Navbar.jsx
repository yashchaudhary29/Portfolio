import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <a href="#">
            <img src="/myLogo.png" alt="Website Logo" className="logo1" />
          </a>
          <div className="logo">Yash Chaudhary</div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#stats">Coding Stats</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;