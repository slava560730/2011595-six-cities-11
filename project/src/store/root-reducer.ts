import { combineReducers } from '@reduxjs/toolkit';

import { userProcess } from './user-process/user-process';
import { NameSpace } from '../consts';
import { appData } from './app-data/app-data';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
