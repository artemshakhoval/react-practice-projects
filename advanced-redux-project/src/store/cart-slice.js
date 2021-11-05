import { createSlice } from "@reduxjs/toolkit";

const cartInitState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload; //// have item
      const existingItem = state.items.find((item) => item.id === newItem.id); //// find item in array
      state.totalQuantity++; /// when add new item to cart change cart's quantity
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          totalPrice: newItem.totalPrice,
          totalAmount: newItem.totalAmount,
        });
      } else {
      }
    },
    removeItems() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
