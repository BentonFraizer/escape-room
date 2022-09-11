import { store } from '../store/index';
import { Quest } from './index';

export type SiteData = {
  questsList: Quest[],
  quest: Quest | null,
  error: boolean,
}

export type SiteProcess = {
  type: string,
  isPostOrderRequestPendind: boolean,
  isPostOrderRequestSuccessful: boolean,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
