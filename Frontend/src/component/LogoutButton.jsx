import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authActions'; // Ensure correct action import
import { useNavigate } from 'react-router-dom';
import '../styles/generalStyles.css'

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get the user state from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Render the logout button only if user is logged in
  return isAuthenticated ? (
    <button onClick={handleLogout} className="blue-btn">Logout</button>
  ) : null;
}

export default LogoutButton;
