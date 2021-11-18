import React from "react";
import ExpenseDate from "../ExpensesDate/ExpensesDate";
import Card from "../../UI/Card/Card";
import "./ExpensesItem.css";

const ExpenseItem = (props) => {
  const { date, title, amount } = props;
  //console.log(title);
  // const [newTitle, setNewTitle] = useState(title);

  // const changeTitleHandler = () => {
  //   setNewTitle("New Title");
  //   console.log(newTitle);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={changeTitleHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
