import axios from 'axios';

export const apiAddress = 'http://localhost:5000/';

const $host = axios.create({
  baseURL: apiAddress,
});

const $authHost = axios.create({
  baseURL: apiAddress,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
