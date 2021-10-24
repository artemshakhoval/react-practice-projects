import React from "react";
import mealsImg from "../../assets/meals.jpg";

import classes from "./header.module.css";
import HeaderCartButton from "./headerCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
