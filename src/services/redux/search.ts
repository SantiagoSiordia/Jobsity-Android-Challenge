import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query += action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
