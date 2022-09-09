import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteData } from '../../types/state';
import {
  fetchQuestsAction,
  fetchQuestAction,
  // fetchSimilarFilmsAction,
  // fetchPromoFilmAction, fetchCommentsAction,
  // postCommentAction,
  // fetchFavoriteFilmsAction,
  // changeFilmStatusAction
} from '../api-actions';

const initialState: SiteData = {
  questsList: [],
  quest: null,
  isDataLoaded: true,
};

export const siteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    // resetPostCommentError: (state, action) => {
    //   state.error.postComment = action.payload;
    // },
    // resetCommentSentSuccessfully: (state, action) => {
    //   state.isCommentSentSuccessfully = action.payload;
    // },
    // resetFavoriteStatus: (state, action) => {
    //   state.isFavoriteStatusChanged = action.payload;
    // },
    // resetFilmData: (state) => {
    //   state.film = null;
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questsList = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isDataLoaded = false;
      });
      // .addCase(fetchSimilarFilmsAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      // .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
      //   state.similarFilmsList = action.payload;
      //   state.isDataLoaded = false;
      // })
      // .addCase(fetchPromoFilmAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      // .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
      //   state.promoFilm = action.payload;
      //   state.isDataLoaded = false;
      // })
      // .addCase(fetchCommentsAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      // .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      //   state.comments = action.payload;
      //   state.isDataLoaded = false;
      // })
      // .addCase(postCommentAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      // .addCase(postCommentAction.fulfilled, (state) => {
      //   state.isCommentSentSuccessfully = true;
      //   state.isDataLoaded = false;
      // })
      // .addCase(postCommentAction.rejected, (state) => {
      //   state.isDataLoaded = false;
      //   state.error.postComment = true;
      // })
      // .addCase(fetchFavoriteFilmsAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      // .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
      //   state.favoriteFilmsList = action.payload;
      //   state.isDataLoaded = false;
      // })
      // .addCase(changeFilmStatusAction.pending, (state) => {
      //   state.isFavoriteStatusChanged = false;
      // })
      // .addCase(changeFilmStatusAction.fulfilled, (state) => {
      //   state.isFavoriteStatusChanged = true;
      // });
  },
});

// export const { resetPostCommentError, resetCommentSentSuccessfully, resetFavoriteStatus, resetFilmData } = siteData.actions;
