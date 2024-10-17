// Import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import connectDB from '../src/config/db.js'; // Adjust the path if necessary

// Import your route handlers
import userRoutes from './routes/userRoutes.js'; // Example user routes

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' })); // Fix CORS by using the correct format
app.use(helmet()); // Secure the app by setting various HTTP headers
app.use(morgan('dev')); // Log HTTP requests to the console
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Route setup
app.use('/api/users', userRoutes); // Mount user-related routes

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API');
});

// Error handling middleware (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message
  });
});

// Export the app for use in other files (like server.js)
export default app;
