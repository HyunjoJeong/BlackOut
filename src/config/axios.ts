import axios, { AxiosError, type AxiosResponse } from 'axios';

export const APIServer = axios.create({
  baseURL: 'https://jahayeon-back.fly.dev/api/v1',
  headers: { 'Content-Type': `application/json` },
  withCredentials: true
});

// * 2XX Response handler
const handleFulfilled = (response: AxiosResponse) => {
  return response;
};

// * Non 2XX Response handler
const handleRejected = (error: any) => {
  if (error instanceof AxiosError) {
    console.error(error.response?.data);
    throw error;
  }
};

APIServer.interceptors.response.use(handleFulfilled, handleRejected);
