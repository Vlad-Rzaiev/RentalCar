import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operations";

const handlePending = (state) => {
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const slice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    error: null,
    brandsInitialized: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, handlePending)
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.items = payload;

        state.brandsInitialized = true;
      })
      .addCase(getBrands.rejected, handleRejected);
  },
});

export default slice.reducer;
