import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsForFilters, fetchCars } from "./operations";

const handlePending = (state, action) => {
  const isLoadMore = action.meta?.arg?.page > 1;
  if (isLoadMore) {
    state.isLoadingMore = true;
  } else {
    state.isLoading = true;
  }

  state.error = null;
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
    prices: [],
    page: 1,
    totalPages: 0,
    totalCars: 0,
    isLoading: false,
    isLoadingMore: false,
    error: null,
  },

  reducers: {
    setPage(state, { payload }) {
      state.page = payload;
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
      .addCase(fetchAllCarsForFilters.fulfilled, (state, { payload }) => {
        const sortedPrices = [
          ...new Set(payload.cars.map((car) => car.rentalPrice)),
        ]
          .map(Number)
          .sort((a, b) => a - b);
        state.prices = sortedPrices;
      })
      .addCase(fetchAllCarsForFilters.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { setPage } = slice.actions;

export default slice.reducer;
