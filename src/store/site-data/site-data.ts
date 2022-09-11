import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteData } from '../../types/state';
import { fetchQuestsAction, fetchQuestAction } from '../api-actions';

const initialState: SiteData = {
  questsList: [],
  quest: null,
  error: false,
};

export const siteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
      setPostOrderError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questsList = action.payload;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
      });
  },
});

export const { setPostOrderError } = siteData.actions;
