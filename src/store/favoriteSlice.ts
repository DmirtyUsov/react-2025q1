import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../models';

type Favorite = {
  characters: Character[];
};

const initialState: Favorite = { characters: [] };

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
      state.characters = state.characters.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearAll: (state) => {
      state.characters = [];
    },
  },
});

export default FavoriteSlice.reducer;
export const { addFavorite, removeFavorite, clearAll } = FavoriteSlice.actions;
