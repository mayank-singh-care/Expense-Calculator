import React from "react";

function Expense(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "20px",
        boxShadow: "red 0px 3px 20px",
        margin: "40px",
      }}>
      <h4>{props.date}</h4>
      <h4>{props.title}</h4>
      <h4>${props.expense}</h4>
    </div>
  );
}

export default Expense;
