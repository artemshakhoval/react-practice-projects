import React from "react";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
