import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Login from "./login/login";
import Home from "./home/home";

const Main = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("isLoggedIn");
    if (storedUserData === "1") {
      setIsLogged(true);
    }
  }, []);

  const loginHandler = () => {
    setIsLogged(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogged(false);
  };

  return (
    <main>
      <Header isLogged={isLogged} logoutHandler={logoutHandler} />
      {!isLogged ? <Login loginHandler={loginHandler} /> : <Home />}
    </main>
  );
};

export default Main;
