import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getType = (state: State) => state[NameSpace.Site].type;
