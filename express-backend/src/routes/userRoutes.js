import express from 'express';

// Import the user controller functions
import { registerUser, loginUser, getUserProfile, resetPassword, generateResetToken,  } from '../controllers/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

// Initialize the router
const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for getting the logged-in user's profile (protected route)
router.get('/profile',authenticateUser, getUserProfile);

// Forgot and reset password
router.post('/generate-reset-token',generateResetToken);
router.post('/reset-password',resetPassword);


export default router;
