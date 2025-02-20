import { Link } from "react-router-dom";
import ApplicanLogo from "/Users/felixm/Desktop/applicant/my-app/src/assets/logos/ApplicanLogo.png";
import React from "react";
import "./Navbar.css"; 



const NavBar = () => {
    return (
      <nav className="navbar">
        {/* Logo Button */}
        <a href="/" className="logo-button">
          <img src={ApplicanLogo} alt="Applican Logo" className="logo-img" />
        </a>
  
        {/* Button Container */}
        <div className="nav-links-container">
          {/* Buttons will be added here next */}
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/faqs" className="nav-link">FAQs</a>
          <a href="/submit" className="nav-button">Submit a Win</a>
        </div>
      </nav>
    );
  };
export default NavBar;