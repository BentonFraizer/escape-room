import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getType = (state: State) => state[NameSpace.Site].type;
export const getPostOrderRequestPendingStatus = (state: State) => state[NameSpace.Site].isPostOrderRequestPendind;
export const getPostOrderRequestStatus = (state: State) => state[NameSpace.Site].isPostOrderRequestSuccessful;
