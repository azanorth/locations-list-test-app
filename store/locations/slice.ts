// DUCKS pattern
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import LocationEntity from '@/entities/locationsEntity';
import { Location } from '@/interfaces/location';
import { genRandomStr } from '@/helpers/string';

export interface MoviesState {
  data: Array<LocationEntity>;
}

const initialState: MoviesState = {
  data: [],
};

// Slice
export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLocation(state, action: PayloadAction<Location>) {
      state.data = [...state.data, { ...action.payload, id: genRandomStr() }];
    },
    removeLocation(state, action: PayloadAction<number>) {
      //TODO:
    },
  },
});

// Actions
export const moviesActions = {
  fetchIsLoading: locationsSlice.actions.addLocation,
  fetchSucceeded: locationsSlice.actions.removeLocation,
};

// Selectors
// TODO: Implement filtering
export const selectMovies = (state: RootState): Array<LocationEntity> =>
  state.locations.data;

// Reducer
export default locationsSlice.reducer;
