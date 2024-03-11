import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./slice";

const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
});

export default store;
