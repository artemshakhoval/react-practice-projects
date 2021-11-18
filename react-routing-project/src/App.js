import React from "react";
import { Route } from "react-router-dom";
import MainHeader from "./components/mainHeader";
import ProductDetail from "./pages/productDetail";
import Products from "./pages/products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </>
  );
}

export default App;
