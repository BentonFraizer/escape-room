import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteProcess } from '../../types/state';

const initialState: SiteProcess = {
  type: 'all quests',
  isPostOrderRequestPendind: false,
  isPostOrderRequestSuccessful: false,

};

export const siteProcess = createSlice({
  name: NameSpace.Site,
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changePostOrderRequestPendingStatus: (state, action) => {
      state.isPostOrderRequestPendind = action.payload;
    },
    changePostOrderRequestStatus: (state, action) => {
      state.isPostOrderRequestSuccessful = action.payload;
    }
  }
});

export const { changeType, changePostOrderRequestStatus, changePostOrderRequestPendingStatus } = siteProcess.actions;
