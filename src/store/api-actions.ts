import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest, FormData } from '../types';
import { APIRoute } from '../consts';
import { postOrder } from './action';

// Запрос всех квестов
export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Quest[]>(APIRoute.Quests);
      return data;
    } catch (error) {
      throw new Error('The service is not available at the moment. Try again later.');
    }
  },
);

//Зарос одного квеста
export const fetchQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuest',
  async (id: number, {extra: api}) => {
    const {data} = await api.get<Quest>(`${APIRoute.Quest}${id}`);
    return data;
  },
);

//Отправка заявки на сервер
export const postOrderAction = createAsyncThunk<void, FormData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postOrder',
  async ({name, peopleCount, phone, isLegal}, {dispatch, extra: api}) => {
    const {data} = await api.post<FormData>(APIRoute.Orders, {name, peopleCount, phone, isLegal});
    dispatch(postOrder(data));
  },
);
