import React, { useState } from "react";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import CartProvider from "./store/cartProvider";

const App = () => {
  const [isShow, setIsShow] = useState(false);

  const showModalHandler = () => {
    setIsShow(true);
  };

  const hideModalHandler = () => {
    setIsShow(false);
  };
  return (
    <CartProvider>
      {isShow && <Cart hideModalHandler={hideModalHandler} />}

      <Header showModalHandler={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
