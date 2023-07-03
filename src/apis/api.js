import axios from 'axios';
import camelCase from 'camelcase-keys';
// import { API_URL } from '@src/configs';

const axiosClient = axios.create({
  baseURL: `https://project20221-team2-wordcup.onrender.com/api`,
  responseType: 'json',
  timeout: 15 * 1000,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => camelCase(response.data, { deep: true }),
  (error) => Promise.reject(error),
);

export default axiosClient;
