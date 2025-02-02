import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slice/cityslice";
import subscribeReducer from "../slice/subscribeslice";

const store = configureStore({
  reducer: {
    cities: cityReducer,
    subscribe: subscribeReducer,
  },
});

export default store;