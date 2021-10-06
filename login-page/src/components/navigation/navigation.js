import React from "react";
import classes from "./navigation.module.css";

const Navigation = ({ isLogged, logoutHandler }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {isLogged && (
          <li>
            <a href="/">User</a>
          </li>
        )}

        {isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}

        {isLogged && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
