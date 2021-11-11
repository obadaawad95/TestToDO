import { createAsyncThunk } from "@reduxjs/toolkit";
import { weatherApi } from "../../api";

export const getWeather = createAsyncThunk(
  "[GET] Weather",
  async (args, { rejectWithValue }) => {
    try {
      const response = await weatherApi.getWeather(args);
      if (response?.data?.message) {
        throw response.message;
      } else if (response?.data === null) {
        throw console.log("A");
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
