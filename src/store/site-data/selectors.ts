import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getQuests = (state: State) => state[NameSpace.Data].questsList;
// export const getFilm = (state: State) => state[NameSpace.Data].film;
// export const getSimilarFilmsList = (state: State) => state[NameSpace.Data].similarFilmsList;
// export const getPromoFilm = (state: State) => state[NameSpace.Data].promoFilm;
// export const getComments = (state: State) => state[NameSpace.Data].comments;
// export const getDataLoadedStatus = (state: State) => state[NameSpace.Data].isDataLoaded;
// export const getFavoriteFilms = (state: State) => state[NameSpace.Data].favoriteFilmsList;
// export const getPostCommentError = (state: State) => state[NameSpace.Data].error.postComment;
// export const getCommentSentStatus = (state: State) => state[NameSpace.Data].isCommentSentSuccessfully;
// export const getFavoriteStatusChange = (state: State) => state[NameSpace.Data].isFavoriteStatusChanged;
