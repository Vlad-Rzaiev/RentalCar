import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getBrands = createAsyncThunk(
  "brands/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/brands");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
