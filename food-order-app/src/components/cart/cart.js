import React from "react";
import Modal from "../ui/modal";
import classes from "./cart.module.css";

const Cart = () => {
  let cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
