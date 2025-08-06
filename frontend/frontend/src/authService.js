import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth'; // backend URL

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  // Save token to localStorage
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
  }
  return res.data;
};

export const getToken = () => localStorage.getItem('token');

export const logoutUser = () => {
  localStorage.removeItem('token');
};
