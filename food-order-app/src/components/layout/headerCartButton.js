import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";
import CartIcon from "../cart/cartIcon";

import classes from "./headerCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(ModalContext);
  return (
    <button className={classes.button} onClick={ctx.showModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
