import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLoggedOut: () => {},
});

export default AuthContext;
