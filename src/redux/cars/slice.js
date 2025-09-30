import { createSlice, current } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const handlePending = (state, action) => {
  const isLoadMore = action.meta?.arg?.page > 1;
  if (isLoadMore) {
    state.isLoadingMore = true;
  } else {
    state.isLoading = true;
  }

  state.error = null;

  state.currentCar = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.isLoadingMore = false;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    totalCars: 0,
    isLoading: false,
    isLoadingMore: false,
    error: null,
    currentCar: null,
  },

  reducers: {
    setPage(state, { payload }) {
      state.page = payload;
    },
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.totalPages = 0;
      state.totalCars = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        const { cars, page, totalCars, totalPages } = payload;
        const append = page > 1;
        state.items = append ? [...state.items, ...cars] : cars;

        state.totalCars = totalCars;
        state.totalPages = totalPages;
        state.isLoading = false;
        state.isLoadingMore = false;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, { payload }) => {
        state.currentCar = payload;
        state.isLoading = false;
      })
      .addCase(fetchCarById.rejected, handleRejected);
  },
});

export const { setPage, resetCars } = slice.actions;

export default slice.reducer;
