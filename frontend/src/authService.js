import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth'; 

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
 
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
  }
  return res.data;
};

export const getToken = () => localStorage.getItem('token');

export const logoutUser = () => {
  localStorage.removeItem('token');
};
