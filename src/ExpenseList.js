import React from "react";
import "./ExpenseList.css";

export const ExpenseList = (props) => {
  return (
    <div className="expense-list__element">
      <div>{props.stateObject.name}</div>
      <div>{props.stateObject.price}</div>
      <div>{props.stateObject.type}</div>
      <div>{props.stateObject.date}</div>
      <div>{props.stateObject.memo}</div>
      <div>{props.stateObject.repurchase}</div>
    </div>
  );
};
