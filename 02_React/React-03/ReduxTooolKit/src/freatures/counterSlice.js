import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  name: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    FormData: (state, actions) => {
      state.name.push(actions.payload);
    },
  },
});

export const { increment, decrement, FormData } = counterSlice.actions;

export default counterSlice.reducer;
