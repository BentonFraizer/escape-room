import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;
const NOT_FOUND = 404;

export const createAPI = (): AxiosInstance => {

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  //"перехватчик" ошибки
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === NOT_FOUND) {
        throw new Error('Смотри файл api.ts. Выброшена ошибка, нужно подкорректировать. Возможно нужно написать вместо сообщения: error.response от Axios');
      } else if (error.response && shouldDisplayError(error.response)) {
        throw new Error('Смотри файл api.ts. Выброшена ошибка, нужно подкорректировать. Возможно нужно написать вместо сообщения: error.response от Axios');
      }

      throw error;
    }
  );

  return api;
};
