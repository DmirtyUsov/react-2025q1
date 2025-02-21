import { configureStore } from '@reduxjs/toolkit';
import { FavoriteSlice } from './favoriteSlice';

export const store = configureStore({
  reducer: { favorites: FavoriteSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
