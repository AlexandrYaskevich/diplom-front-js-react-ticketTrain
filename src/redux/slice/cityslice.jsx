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

export const fetchCitiesFrom = createAsyncThunk(
  "cities/fetchCitiesFrom",
  async (name) => {
    const response = await fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`
    );
    const data = await response.json();
    return data; 
  }
);

export const fetchCitiesTo = createAsyncThunk(
  "cities/fetchCitiesTo",
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
    citiesFrom: [],
    citiesTo: [],
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
      .addCase(fetchCitiesFrom.fulfilled, (state, action) => {
        state.loading = false;
        state.citiesFrom = action.payload; 
      })
      .addCase(fetchCitiesTo.fulfilled, (state, action) => {
        state.loading = false;
        state.citiesTo = action.payload; 
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default citySlice.reducer;
