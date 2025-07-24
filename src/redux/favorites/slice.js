import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    carsId: [],
  },
  reducers: {
    toggleFavorite(state, { payload }) {
      if (state.carsId.includes(payload)) {
        state.carsId = state.carsId.filter((id) => id !== payload);
      } else {
        state.carsId.push(payload);
      }
    },
  },
});

export const { toggleFavorite } = slice.actions;

export default slice.reducer;
