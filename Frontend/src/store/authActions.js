import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api/users', // Base URL for your API
});

// Login action
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/login', { email, password }); // Corrected API call
      // Store user in a cookie with a specified expiration time (e.g., 1 day)
      Cookies.set('user', JSON.stringify(response.data.user), { expires: 5 });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Register action
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/register', { email, password }); // Corrected API call
      // Store user in a cookie with a specified expiration time (e.g., 1 day)
      Cookies.set('user', JSON.stringify(response.data.user), { expires: 5 });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Logout action
export const logout = createAsyncThunk(
  'auth/logout', // Unique action type for logout
  async () => {
    // Remove user from cookies
    Cookies.remove('user');
    // Optionally, you can also call an API endpoint to invalidate the session on the server
    await api.post('/logout'); // Uncomment if your API has a logout endpoint
  }
);
