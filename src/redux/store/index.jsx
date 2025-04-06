import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slice/cityslice";
import subscribeReducer from "../slice/subscribeslice";
import dateReducer from "../slice/dateSlice";
import lastTicketsReducer from "../slice/ticketslastslice"

const store = configureStore({
  reducer: {
    cities: cityReducer,
    subscribe: subscribeReducer,
    date: dateReducer,
    lastTickets: lastTicketsReducer,
  }
});

export default store;