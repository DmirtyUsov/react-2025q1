import { configureStore } from '@reduxjs/toolkit';
import { FavoriteSlice } from './favoriteSlice';
import { apiService } from '../api.service';
import { PageSlice } from './pageSlice';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    favorites: FavoriteSlice.reducer,
    page: PageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
