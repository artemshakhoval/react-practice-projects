import { useContext } from "react";
import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
