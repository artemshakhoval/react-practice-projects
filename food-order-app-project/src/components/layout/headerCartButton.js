import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/cartIcon";

import classes from "./headerCartButton.module.css";

const HeaderCartButton = ({ showModalHandler }) => {
  const [btnIsHighlighted, setBntIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numberOfItems = items.length;
  // const numberOfItems = items.reduce((currNumber, item) => {
  //   return currNumber + item.amount;
  // }, 0);

  const bntClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBntIsHighlighted(true);

    const timer = setTimeout(() => {
      setBntIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={bntClasses} onClick={showModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
