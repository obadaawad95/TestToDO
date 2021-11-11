import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./weather.action";
const initialState = {
  weather: undefined,
  loading: false,
};
export const Weatherslice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    });

    builder.addCase(getWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWeather.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectWeather = (state) => state.weather.weather;

export default Weatherslice.reducer;
