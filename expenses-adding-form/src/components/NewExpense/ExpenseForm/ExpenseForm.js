import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveExpenseData, hideFormHandler } = props; //// pass data from CHILD-to-PARENT
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  ////// 1 state /////
  // const [state, setState] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const getTitleHandler = (e) => {
    setEnteredTitle(e.target.value);

    /////////// 1 state //////////
    // setState({
    //   ...state,
    //   enteredTitle: e.target.value,
    // });

    ////////// prev state //////////
    // setState((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const getAmountHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setState({
    //   ...state,
    //   enteredAmount: e.target.value,
    // });
  };

  const getDateHandler = (e) => {
    setEnteredDate(e.target.value);

    // setState({
    //   ...state,
    //   enteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData); //// pass data from CHILD-to-PARENT

    setEnteredTitle(""); //// 2 way-bindings (reset input)
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={getTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //// 2 way-bindings (reset input)
            onChange={getAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={getDateHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={hideFormHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
