import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { store } from '../store';
import { changePostOrderRequestStatus, changePostOrderRequestPendingStatus } from '../store/site-process/site-process';
import { setPostOrderError } from '../store/site-data/site-data';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;
const CREATED = 201;
const BAD_REQUEST = 400;

export const createAPI = (): AxiosInstance => {

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  //"перехватчик" ошибки
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      store.dispatch(changePostOrderRequestPendingStatus(false));
      if (error.response?.status === BAD_REQUEST) {
        store.dispatch(setPostOrderError(true));
      }

      throw error;
    }
  );

  //"перехватчик" успешной отправки заказа
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === CREATED) {
        store.dispatch(changePostOrderRequestStatus(true));
      }

      return response;
    },
  );

  return api;
};
