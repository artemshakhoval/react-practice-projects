import React from "react";
import { Route } from "react-router-dom";
import MainHeader from "./components/mainHeader";
import Products from "./pages/products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </>
  );
}

export default App;
