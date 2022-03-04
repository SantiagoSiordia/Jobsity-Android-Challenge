import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoriteType {
  showId: string;
  showName: string;
}
export interface FavoritesState {
  favorites: Array<FavoriteType>;
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteType>) => {
      const newFavorites = [...state.favorites, action.payload];
      console.log(newFavorites);
      const newFavoritesSorted = newFavorites.sort((a, b) =>
        a.showName.localeCompare(b.showName),
      );

      state.favorites = [...newFavoritesSorted];
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = [
        ...state.favorites.filter(fav => fav.showId !== action.payload),
      ];
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
