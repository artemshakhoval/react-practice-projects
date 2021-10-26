import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../ui/modal";

import classes from "./cart.module.css";
import CartItem from "./cartItem.js";

const Cart = ({ hideModalHandler }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addCartItemHandler = (item) => {};

  const removeCartItemHandler = (id) => {
    cartCtx.items.filter((item) => item !== id);
  };

  return (
    <Modal hideModalHandler={hideModalHandler}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideModalHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
