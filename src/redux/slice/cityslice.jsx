import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (name) => {
    const response = await fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`
    );
    const data = await response.json();
    return data; 
  }
);

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload || []; 
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default citySlice.reducer;
