import axios from 'axios';
import { API_URL } from './api';

const apiBaseUrl = API_URL;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;