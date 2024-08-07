// DUCKS pattern
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface AuthState {
  data: boolean | null;
}

const initialState: AuthState = {
  data: null,
};

// Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<boolean | null>) {
      state.data = action.payload;
    },
  },
});

// Actions
export const authActions = {
  setSession: authSlice.actions.setSession,
};

// Selectors
export const selectSession = (state: RootState): boolean => state.auth.data;

// Reducer
export default authSlice.reducer;
