import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'; // For social media icons
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/SignUp.css';
import { register } from '../store/authActions';
import { clearError } from '../store/authSlice';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Clear errors on component mount or unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  // Redirect to homepage after successful registration
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Handle sign up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };

  return (
    <div className='signup-container'>
      <div className='left-side'>
        <h1>Welcome to SkyStarter.AI</h1>
        <p>Start your journey with us today!</p>
      </div>

      <div className='right-side'>
        <h1>Sign Up</h1>

        {/* Display error message if registration fails */}
        {error && <p className='error-message'>{error}</p>}

        <form onSubmit={handleSignUp}>
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

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p>Already have an account? <a href="/login">Sign In</a></p>

        <p>Or</p>
        <div className='social-buttons'>
          <div className='google-icon'>
            <FaGoogle />
          </div>
          <div className='facebook-icon'>
            <FaFacebookF />
          </div>
        </div>

        <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
      </div>
    </div>
  );
}
