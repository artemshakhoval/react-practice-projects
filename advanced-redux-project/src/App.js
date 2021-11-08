import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartIsVisible = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://advanced-redux-9b3b3-default-rtdb.firebaseio.com/cart.json",
      {
        method: "POST",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
