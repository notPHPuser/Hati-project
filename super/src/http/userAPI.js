import { $authHost, $host } from '.';

export const registration = async (login, email, password) => {
  const response = await $host.post('/api/user/registration', {
    login,
    email,
    password,
    role: 'USER',
  });
  return response;
};

export const login = async (login, email, password) => {
  const response = await $host.post('/api/user/login', {
    login,
    email,
    password,
  });
  return response;
};

export const check = async () => {
  const response = await $host.post('/api/user/auth', {
    // login,
    // email,
    // password,
    // role: 'USER',
  });
  return response;
};
