import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slice/cityslice"

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
});

export default store;