import React from "react";
import Navigation from "../navigation/navigation";
import classes from "./header.module.css";

const Header = ({ isLogged, logoutHandler }) => {
  return (
    <div className={classes["main-header"]}>
      <h1>Typical Page</h1>
      <Navigation isLogged={isLogged} logoutHandler={logoutHandler} />
    </div>
  );
};

export default Header;
