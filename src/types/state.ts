import { store } from '../store/index';
import { Quest } from './index';

export type SiteData = {
  questsList: Quest[],
  quest: Quest | null,
  isDataLoaded: boolean,
}

export type SiteProcess = {
  type: string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
