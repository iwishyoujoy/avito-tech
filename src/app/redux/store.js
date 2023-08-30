import { gameApi } from '@/app/redux/services/gamesApi';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from '@/app/redux/middleware/logger';

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gameApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== 'production',
});
