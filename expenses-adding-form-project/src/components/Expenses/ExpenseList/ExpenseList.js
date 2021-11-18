import React from "react";
import ExpenseItem from "../ExpensesItem/ExpensesItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { items } = props;

  if (!items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((el) => (
        <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          key={el.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
