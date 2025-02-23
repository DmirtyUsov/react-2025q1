import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, Page } from '../models';

const initialState: Page<Character> = {
  info: { count: 0, pages: 0, prev: null, next: null },
  results: [],
};
export const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (_, action: PayloadAction<Page<Character> | undefined>) => {
      return action.payload ? action.payload : initialState;
    },
  },
});

export default PageSlice.reducer;
export const { setPage } = PageSlice.actions;
