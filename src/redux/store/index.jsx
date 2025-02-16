import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slice/cityslice";
import subscribeReducer from "../slice/subscribeslice";
import dateReducer from "../slice/dateSlice"

const store = configureStore({
  reducer: {
    cities: cityReducer,
    subscribe: subscribeReducer,
    date: dateReducer,
  },
});

export default store;