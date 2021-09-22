import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const [showForm, setShowForm] = useState(false);
  //// pass data from CHILD-to-PARENT (from ExpenseForm to NewExpense) !!!!!!!!!!!!
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.floor(Math.random() * 11),
    };

    onAddExpense(expenseData); //// pass data from CHILD-to-PARENT (from NewExpense to App) !!
    hideFormHandler();
  };
  /////////////  pass data from CHILD-to-PARENT (from ExpenseForm to NewExpense) !!!!!!!!!

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="new-expense">
        {showForm ? (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            hideFormHandler={hideFormHandler}
          />
        ) : (
          <button type="button" onClick={showFormHandler}>
            Add Expense
          </button>
        )}
      </div>
    </>
  );
};

export default NewExpense;
