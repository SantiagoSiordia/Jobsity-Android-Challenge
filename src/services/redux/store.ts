import { configureStore } from '@reduxjs/toolkit';
import { createSelectorHook } from 'react-redux';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = createSelectorHook<RootState>();

export type AppDispatch = typeof store.dispatch;
