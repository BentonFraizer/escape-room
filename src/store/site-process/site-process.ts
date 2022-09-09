import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteProcess } from '../../types/state';

const initialState: SiteProcess = {
  type: 'all quests',
};

export const siteProcess = createSlice({
  name: NameSpace.Site,
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const { changeType } = siteProcess.actions;
