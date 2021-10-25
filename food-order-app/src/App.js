import React, { useState } from "react";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import ModalContext from "./store/modal-context";

const App = () => {
  const [isShow, setIsShow] = useState(false);

  const showModalHandler = () => {
    setIsShow(true);
  };

  const hideModalHandler = () => {
    setIsShow(false);
  };
  return (
    <ModalContext.Provider
      value={{
        isShow: isShow,
        showModalHandler: showModalHandler,
        hideModalHandler: hideModalHandler,
      }}
    >
      {isShow && <Cart hideModalHandler={hideModalHandler} />}

      <Header />
      <main>
        <Meals />
      </main>
    </ModalContext.Provider>
  );
};

export default App;
