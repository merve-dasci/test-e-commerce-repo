import axios from 'axios';


export const checkAuthToken = () => {
  const token = localStorage.getItem('token');
  return !!token;
};


export const getAuthToken = () => {
  return localStorage.getItem('token');
};


export const removeAuthToken = () => {
  localStorage.removeItem('token');
};


export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};


export const removeAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};