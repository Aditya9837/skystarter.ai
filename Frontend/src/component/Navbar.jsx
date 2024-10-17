import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Only import FaBars for the hamburger icon
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import to access Redux state
import LogoutButton from './LogoutButton';
import '../styles/Navbar.css'; // Navbar specific styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Access isAuthenticated state from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a className='nav-link' href="#">SkyStarter</a>
          <a className='nav-link' href="#">Services</a>
          <a className='nav-link' href="#">About Us</a>
          <a className='nav-link' href="/craft">Resources</a>
        </div>
        <div className="navbar-right">
          <a className='nav-link' href="#">Contact Us</a>
          <i className="ri-search-line"></i>
          {isAuthenticated ? (
            <LogoutButton /> // Show logout button if authenticated
          ) : (
            <button onClick={() => navigate("/login")} className='login-btn'>
              Login
            </button> // Show login button if not authenticated
          )}
        </div>
        {/* Show hamburger icon only, no close icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a className='nav-link' href="#">SkyStarter</a>
        <a className='nav-link' href="/prompt">Services</a>
        <a className='nav-link' href="#">About Us</a>
        <a className='nav-link' href="#">Resources</a>
        <a className='nav-link' href="#">Contact Us</a>
        {isAuthenticated ? (
          <LogoutButton /> // Show logout button if authenticated in mobile menu
        ) : (
          <button onClick={() => navigate("/")} className='login-btn'>
            Login
          </button> // Show login button if not authenticated in mobile menu
        )}
      </div>
    </nav>
  );
};

export default Navbar;
