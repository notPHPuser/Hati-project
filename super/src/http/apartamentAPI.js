import { $authHost, $host } from '.';
import { jwtDecode } from 'jwt-decode';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createApartament = async (apartment) => {
  const { data } = await $authHost.post('api/apartment', apartment);
  return data;
};

export const fetchApartament = async (name, img, price) => {
  const { data } = await $host.get('api/apartment/', {
    params: {
      name,
      img,
      price,
    },
  });
  return data;
};

export const fetchOneApartament = async (id) => {
  const { data } = await $host.get('api/apartament/' + id);
  return data;
};
