import axios from 'axios';
import { API_URL } from './api';

const apiBaseUrl = API_URL;

// Debug logging
console.log('API_URL:', API_URL);
console.log('apiBaseUrl:', apiBaseUrl);

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;