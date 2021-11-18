import React from "react";
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/mainHeader";
import ProductDetail from "./pages/productDetail";
import Products from "./pages/products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
