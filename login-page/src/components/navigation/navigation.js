import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLogged && (
          <li>
            <a href="/">User</a>
          </li>
        )}

        {ctx.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}

        {ctx.isLogged && (
          <li>
            <button onClick={ctx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
