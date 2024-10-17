import React, { useState, lazy } from 'react';
import { useSelector } from 'react-redux'; // Make sure this is correct

import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar2.css';

const LogoutButton = lazy(() => import('./LogoutButton'));

function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev); // Toggle the state between true and false
  };

  const closeMobileMenu = () => {
    setIsMobile(false); // Close the mobile menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <ul onClick={closeMobileMenu}>
          <li><Link to="/prompt">Create</Link></li>
          <li><Link to="/plan">Plans and Pricing</Link></li>
          <li><Link to="#feedback">Feedback</Link></li>
        </ul>
      </div>

      {/* SignIn Button or Logout */}
      <div className="nav-signin">
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <button className="signin-btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
        )}
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`hamburger-icon ${isMobile ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-expanded={isMobile}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="mobile-menu open">
          <ul onClick={closeMobileMenu}>
            <li><Link to="/prompt">Create</Link></li>
            <li><Link to="/plan">Plans and Pricing</Link></li>
            <li><Link to="#feedback">Feedback</Link></li>
          </ul>
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <button className="signin-btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
