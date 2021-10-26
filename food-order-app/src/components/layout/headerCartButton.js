import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/cartIcon";

import classes from "./headerCartButton.module.css";

const HeaderCartButton = ({ showModalHandler }) => {
  const ctx = useContext(CartContext);

  //const numberOfItems = ctx.items.length;
  const numberOfItems = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={showModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
