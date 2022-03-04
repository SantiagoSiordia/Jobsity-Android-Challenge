import { configureStore } from '@reduxjs/toolkit';
import { createSelectorHook } from 'react-redux';
import favoritesReducer from './favorites';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = createSelectorHook<RootState>();

export type AppDispatch = typeof store.dispatch;
