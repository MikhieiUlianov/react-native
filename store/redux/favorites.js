import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const filteredIds = state.ids.filter((id) => id !== action.payload);
      state.ids = filteredIds;
    },
  },
});

const { actions, reducer } = favoritesSlice;

export const { addFavorite, removeFavorite } = actions;

export default reducer;
