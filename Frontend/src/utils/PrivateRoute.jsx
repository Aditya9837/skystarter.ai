import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Check for user cookie in case the Redux state is out of sync
  const userCookie = Cookies.get('user'); // Adjust the key based on your implementation

  // Determine authentication status based on Redux state or cookie
  const authenticated = isAuthenticated || userCookie;
 

  return authenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
