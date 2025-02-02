import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    fromloading: false,
    fromerror: null,
    citiesTo: [],
    toloading: false,
    toerror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesFrom.pending, (state) => {
        state.fromloading = true;
        state.fromerror = null;
      })
      .addCase(fetchCitiesFrom.fulfilled, (state, action) => {
        state.fromloading = false;
        state.citiesFrom = action.payload; 
      })
      .addCase(fetchCitiesTo.fulfilled, (state, action) => {
        state.toloading = false;
        state.citiesTo = action.payload; 
      })
      .addCase(fetchCitiesTo.pending, (state) => {
        state.toloading = true;
        state.toerror = null;
      });
  },
});


export default citySlice.reducer;
