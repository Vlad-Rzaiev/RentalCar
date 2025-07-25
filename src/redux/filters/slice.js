import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = slice.actions;

export default slice.reducer;
