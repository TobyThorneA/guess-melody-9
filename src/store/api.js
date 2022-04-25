import axios from "axios";
import { getDataUser } from "service/token";

const BECKEND_URL = 'http://localhost:3001/';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BECKEND_URL,
  });
  api.interceptors.request.use(
    (config) => {
      const dataUser = getDataUser();

      if (dataUser.token) {
        config.headers['x-token'] = dataUser.token;
      }

      return config;
    },
  );
  return api;
};
