import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initState;
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
