import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../models';

type Favorite = {
  favorites: Character[];
};

const initialState: Favorite = { favorites: [] };

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearAll: (state) => {
      state.favorites = [];
    },
  },
});

export default FavoriteSlice.reducer;
export const { addFavorite, removeFavorite, clearAll } = FavoriteSlice.actions;
