import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    totalCars: 0,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        const { cars, page, totalCars, totalPages } = payload;
        const append = page > 1;
        state.items = append ? [...state.items, ...cars] : cars;

        state.totalCars = totalCars;
        state.page = page;
        state.totalPages = totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export default slice.reducer;
