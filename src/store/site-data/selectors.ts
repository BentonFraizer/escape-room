import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getQuests = (state: State) => state[NameSpace.Data].questsList;
export const getQuest = (state: State) => state[NameSpace.Data].quest;
export const getError = (state: State) => state[NameSpace.Data].error;
