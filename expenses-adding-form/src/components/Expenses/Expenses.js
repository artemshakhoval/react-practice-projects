import React from "react";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import { useState } from "react/cjs/react.development";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { item } = props;

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = item.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
