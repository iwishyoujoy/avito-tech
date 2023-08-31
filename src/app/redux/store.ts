import { logger } from '@/app/redux/middleware/logger';
import { gameApi } from '@/app/redux/services/gamesApi';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';

//TODO: переписать на тайпскрипт

interface FiltersState {
  platform: string;
  genre: string;
  sortBy: string;
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    platform: 'all',
    genre: 'all',
    sortBy: 'relevance'
  } as FiltersState,
  reducers: {
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    }
  }
});

export const { setPlatform, setGenre, setSortBy } = filtersSlice.actions;

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    filters: filtersSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gameApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
