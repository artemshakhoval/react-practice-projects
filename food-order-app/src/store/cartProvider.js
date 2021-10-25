import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return initState;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatchCart] = useReducer(cartReducer, initState);

  const addCartItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeCartItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const cartItems = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
