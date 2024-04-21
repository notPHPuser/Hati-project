import { $authHost, $host } from '.';
import { jwtDecode } from 'jwt-decode';

export const registration = async (login, email, password) => {
  const { data } = await $host.post('/api/user/registration', {
    login,
    email,
    password,
    role: 'USER',
  });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const login = async (login, email, password) => {
  const { data } = await $host.post('/api/user/login', {
    login,
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  // const { data } = await $authHost.get('/api/user/auth', {
  //   // login,
  //   // email,
  //   // password,
  //   // role: 'USER',
  // });
  // localStorage.setItem('token', data.token);
  // return jwtDecode(data.token);
};
