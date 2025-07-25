import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllCarsForFilters = createAsyncThunk(
  "cars/fetchAllForFilters",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const totalCars = state.cars.totalCars;
    try {
      const { data } = await axios.get("/cars", {
        params: { limit: totalCars },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
