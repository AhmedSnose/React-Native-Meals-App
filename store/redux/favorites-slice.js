import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: {
    ids: []
  },
  reducers:{
    addFavorite: (state,action) => {
        state.ids.push(action.payload.id);
    },
    removeFavorite: (state,action) => {
        state.ids = state.ids.filter(id => id != action.payload.id);
    }
  }
});


export default favoritesSlice.reducer;
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
