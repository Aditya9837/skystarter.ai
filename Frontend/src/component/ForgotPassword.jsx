import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/ForgotPassword.css'; // Your custom styles

const ForgotPassword = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  // Handle email submission to get the reset token
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!validateEmail(email)) {
        setError('Invalid email address');
        setLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:5000/api/users/generate-reset-token', { email });
      setResetToken(response.data.token); // Store the token from response
      setSuccess(true);
      setSubmitted(true);
    } catch (error) {
      console.error('Error generating reset token:', error.response ? error.response.data : error);
      setError('Error generating reset token. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Send the new password and reset token to the backend
      await axios.post('http://localhost:5000/api/users/reset-password', {
        token: resetToken,
        newPassword,
      });

      setPasswordResetSuccess(true);
      setSubmitted(false); // After successful reset, reset the form

      // Redirect to sign-in page after successful password reset
      navigate('/'); // Change to your actual sign-in page route
    } catch (error) {
      console.error('Error resetting password:', error.response ? error.response.data : error);
      setError('Invalid Email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className='forgot-password-page'>
      <div className="forgot-password-container">
        <h1>Forgot Password?</h1>
        <p>Please enter your email address to reset your password.</p>

        {!passwordResetSuccess ? (
          !submitted ? (
            <form onSubmit={handleSubmit} className="forgot-password-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Generating Token...' : 'Generate Reset Token'}
              </button>
            </form>
          ) : (
            <div className="reset-password-form">
              <h2>Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Resetting Password...' : 'Reset Password'}
                </button>
              </form>
            </div>
          )
        ) : (
          <div className="confirmation-message">
            <p>Your password has been successfully reset!</p>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;
