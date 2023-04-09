import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expensesList.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses to show</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesList.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
