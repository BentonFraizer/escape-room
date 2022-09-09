import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types';
// import { postComment, redirectToRoute, changeFilmStatus } from './action';
import {
  APIRoute,
  // AppRoute
} from '../consts';
// import { AuthData, UserData, PostCommentData, ChangeFilmStatusData } from '../types';

// Запрос всех фильмов
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

// Зарос одного фильма
// export const fetchFilmAction = createAsyncThunk<Film, number, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchFilm',
//   async (id: number, {extra: api}) => {
//     const {data} = await api.get<Film>(`${APIRoute.Film}${id}`);
//     return data;
//   },
// );

//Запрос похожих фильмов
// export const fetchSimilarFilmsAction = createAsyncThunk<Film[], number, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchSimilarFilms',
//   async (id: number, {extra: api}) => {
//     const {data} = await api.get<Film[]>(`${APIRoute.Film}${id}/similar`);
//     return data;
//   },
// );

//Запрос промофильма
// export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchPromoFilm',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.get<Film>(APIRoute.Promo);
//     return data;
//   },
// );

//Запрос комментариев
// export const fetchCommentsAction = createAsyncThunk<Comment[], number, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchComments',
//   async (id: number, {extra: api}) => {
//     const {data} = await api.get<Comment[]>(`${APIRoute.Comments}${id}`);
//     return data;
//   },
// );

//Отправка комментария на сервер
// export const postCommentAction = createAsyncThunk<void, PostCommentData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/postComment',
//   async ({comment, rating, filmId}, {dispatch, extra: api}) => {
//     const {data} = await api.post<PostCommentData>(`${APIRoute.Comments}${filmId}`, {comment, rating});
//     dispatch(postComment(data));
//   },
// );

//Изменение статуса "к просмотру" у фильма
// export const changeFilmStatusAction = createAsyncThunk<void, ChangeFilmStatusData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/changeFilmStatus',
//   async ({filmId, status}, {dispatch, extra: api}) => {
//     const {data} = await api.post<ChangeFilmStatusData>(`${APIRoute.Favorite}/${filmId}/${status}`, {filmId, status});
//     dispatch(changeFilmStatus(data));
//   },
// );
