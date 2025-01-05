import axios, { AxiosError, type AxiosResponse } from 'axios';

export const APIServer = axios.create({
  baseURL: '', // TODO
  headers: { 'Content-Type': `application/json` },
});

// * 2XX Response handler
const handleFulfilled = (response: AxiosResponse) => {
  return response;
};

// * Non 2XX Response handler
const handleRejected = (error: any) => {
  if (error instanceof AxiosError) {
    console.error(error.response?.data);
  }
};

APIServer.interceptors.response.use(handleFulfilled, handleRejected);
