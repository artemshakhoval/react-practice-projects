import { createSlice } from "@reduxjs/toolkit";

const uiInitState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "ui",
  initialState: uiInitState,
  reducers: {
    show(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = cartSlice.actions;

export default cartSlice.reducer;
