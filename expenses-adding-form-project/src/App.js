import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenseData } from "./components/ExpenseData";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  //// pass data from CHILD-to-PARENT (from NewExpense to App) !!!!!!!!!!!!
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //console.log(expenses);

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </>
  );
};

export default App;
