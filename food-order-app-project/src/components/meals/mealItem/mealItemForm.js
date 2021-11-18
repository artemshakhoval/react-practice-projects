import React, { useRef, useState } from "react";
import Input from "../../ui/input";
import classes from "./mealItemForm.module.css";

const MealItemForm = ({ id, addToCart }) => {
  const [enteredAmountValid, setEnteredAmountValid] = useState(true);

  const cartInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = cartInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum > 5 ||
      enteredAmountNum < 1
    ) {
      setEnteredAmountValid(false);
      return;
    }
    addToCart(enteredAmountNum);
  };

  console.log(cartInputRef);
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={cartInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!enteredAmountValid && <p>Enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
