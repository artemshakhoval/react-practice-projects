import { createSlice } from "@reduxjs/toolkit";

const cartInitState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "ui",
  initialState: cartInitState,
  reducers: {
    show(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
