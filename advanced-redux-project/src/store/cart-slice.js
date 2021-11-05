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
      const newItem = action.payload; //// gave item
      const existingItem = state.items.find((item) => item.id === newItem.id); //// find item in array
      state.totalQuantity++; /// when add new item to cart change cart's quantity
      if (!existingItem) {
        /// if new item is different from another we push it
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++; /// if new item is same then change quantity of existing item
        existingItem.totalPrice = existingItem.totalPrice + newItem.price; /// add new item's price to totalPrice
      }
    },
    removeItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.quantity--;
      if (existingItem === 1) {
        state.items = state.items.filter((item) => item.id !== id); /// if we have only 1 item and want to delete it then we remove this item from our items array
      } else {
        existingItem.quantity--; /// if we have 2 or more items then just decrement quantity of item
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
