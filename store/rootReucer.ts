import { Action } from '@reduxjs/toolkit';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import { PersistConfig, persistCombineReducers } from 'redux-persist';

import authReducer from '@/store/auth/slice';
import { RootState } from './store';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  whitelist: ['auth'],
};

const combineReducers = persistCombineReducers<RootState>(persistConfig, {
  auth: authReducer,
});

const rootReducer = (
  state: RootState,
  action: Action,
): ReturnType<typeof combineReducers> => combineReducers(state, action);

export default rootReducer;
