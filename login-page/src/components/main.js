import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Login from "./login/login";
import Home from "./home/home";
import AuthContext from "../store/auth-context";

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
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        logoutHandler: logoutHandler,
      }}
    >
      <Header />
      <main>
        {!isLogged ? <Login loginHandler={loginHandler} /> : <Home />}
      </main>
    </AuthContext.Provider>
  );
};

export default Main;
