import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../freatures/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
