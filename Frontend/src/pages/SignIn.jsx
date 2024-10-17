import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import '../styles/Signin.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authActions';
import { clearError } from '../store/authSlice';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Clear errors on component mount
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // Navigate after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Handle sign-in form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data=login({ email, password })
    // console.log(data);
    dispatch(data);

  };

  return (
    <div className='signin-container'>
      <div className='left-side'>
        <h1>SkyStarter.AI</h1>
        <p>Unleash your creativity</p>
      </div>
      <div className='right-side'>
        <h1>SIGN IN</h1>

        {/* Show error message if login failed */}
        {error && <p className='error-message'>{error}</p>}

        {/* Sign-in form */}
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          {/* Login button */}
          <button type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Continue'}
          </button>
        </form>
        <p> <a href="/forgotpassword">Forgot Password</a></p>

        <p>New user? <a href="/logout">Create an account</a></p>
        <p>Or</p>

        {/* Social login buttons */}
        <div className='social-buttons'>
          <div className='google-icon' onClick={() => alert('Google OAuth coming soon!')}>
            <FaGoogle /> 
          </div>
          <div className='facebook-icon' onClick={() => alert('Facebook OAuth coming soon!')}>
            <FaFacebook /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
