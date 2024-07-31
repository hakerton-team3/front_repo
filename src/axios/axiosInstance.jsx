// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://ec2-43-201-61-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1', // Swagger에서 확인한 기본 URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
