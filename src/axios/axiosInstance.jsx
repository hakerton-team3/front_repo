// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:     'https://api.smartcheers.site/api/v1',
  timeout: 10000,
  headers: {    
    'Content-Type': 'application/json',
     
  },
  withCredentials: true,
});

export default axiosInstance;