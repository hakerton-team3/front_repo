// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:   'http://ec2-43-201-61-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1',
  // 'https://api.smartcheers.site/api/v1', // 배포시 url
  
  // 로컬에서 사용할시 url

      
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
     
  },
  withCredentials: true,
});

export default axiosInstance;