/* eslint-disable no-param-reassign */
import axios from 'axios';
import { DEVELOPMENT_API_URL, PRODUCTION_API_URL } from '@env';

const baseURLEnviroment = __DEV__ ? DEVELOPMENT_API_URL : PRODUCTION_API_URL;

const api = axios.create({
  baseURL: baseURLEnviroment,
});

export default api;
