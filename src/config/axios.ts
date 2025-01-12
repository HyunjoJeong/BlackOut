import axios, { AxiosError, type AxiosResponse } from 'axios';

export const APIServer = axios.create({
  baseURL: 'https://jahayeon-back.fly.dev/api/v1',
  headers: { 'Content-Type': `application/json` },
  withCredentials: true
});

// Request Interceptor만 추가
APIServer.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 기존 response interceptor 유지
APIServer.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      throw error;
    }
  }
);
