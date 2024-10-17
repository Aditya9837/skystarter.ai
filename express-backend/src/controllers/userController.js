// Import any necessary libraries and models
import User from '../models/userModel.js'; // Assuming you have a User model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';

// Register a new user
// Register a new user
export const registerUser = async (req, res) => {
  const { email, password } = req.body; 
  console.log('Request Body:', req.body);

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User is already registered.' });
    }

    // Create a new user (the password will be hashed in the pre-save hook)
    const newUser = new User({ email, password });

    await newUser.save(); 
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Log in an existing user
export const loginUser = async (req, res) => {

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({message:"Login Successfully", token, user });
  } catch (error) {
    
    res.status(500).json({ message: 'Server error', error });
  }
};




// Get the logged-in user's profile
export const getUserProfile = (req, res) => {
  // Check if the user is authenticated
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized access. Please log in.' });
  }

  // Assuming the user data is attached to req.user
  console.log(req.user); // Log user data for debugging

  // Send the user data in the response
  res.status(200).json({ user: req.user });
};


// Controller function for generating the reset token
export const generateResetToken = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a reset token using JWT
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Ideally, you would email the token to the user instead of returning it
    return res.status(200).json({ token: resetToken });
  } catch (error) {
    console.error('Error generating reset token:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for resetting the password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the JWT reset token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the decoded userId
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the new password is the same as the old one
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return res.status(400).json({ message: 'New password must be different from the old password' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Reset token expired');
      return res.status(400).json({ message: 'Reset token expired' });
    }
    console.error('Error resetting password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
