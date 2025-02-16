import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    dateFrom: null,
    dateTo: null,
  },
  reducers: {
    setDateFrom: (state, action) => {
      state.dateFrom = action.payload;
    },
    setDateTo: (state, action) => {
      state.dateTo = action.payload;
    },
  },
});

export const { setDateFrom, setDateTo } = dateSlice.actions;
export default dateSlice.reducer;