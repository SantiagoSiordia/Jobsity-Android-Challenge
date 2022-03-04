import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  query: {
    queryString: string;
    searchType: 'show' | 'person';
  };
}

const initialState: SearchState = {
  query: {
    queryString: '',
    searchType: 'show',
  },
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<SearchState>) => {
      state.query = { ...action.payload.query };
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
