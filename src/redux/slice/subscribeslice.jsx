import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubscribe = createAsyncThunk(
  "subscribe/fetchSubscribe",
  async (email) => {
    try {
        const response = await fetch(
            `https://students.netoservices.ru/fe-diplom/subscribe?email=${email}`
        );
        //  if (!response.ok) {
        //         const errorText = await response.text();
        //         console.error(`статус запроса на сервере ${response.status}:`, errorText);
        //         throw new Error(`статус запроса на сервере ${response.status}`);  СЕРВЕР НЕ РАБОТАЛ
        //     }

        const data = await response.json();
        return data;
    } catch (error) {
         console.error("Error during fetch:", error.message);
         return {error: error.message}
    }
  }
);

export const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscribe.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(fetchSubscribe.fulfilled, (state) => {
        state.loading = false;
        // if (action.payload.error) {
        //       state.error = action.payload.error;
        //     state.success = false;
        // } else {
              state.success = true;
            state.error = null;
        
      })
        .addCase(fetchSubscribe.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
  },
});


export default subscribeSlice.reducer;
