import React from "react";
import { Route } from "react-router-dom";
import Products from "./components/products";
import Welcome from "./components/welcome";

function App() {
  return (
    <>
      <Route>
        <Welcome path="/welcome" />
      </Route>
      <Route>
        <Products path="/products" />
      </Route>
    </>
  );
}

export default App;
