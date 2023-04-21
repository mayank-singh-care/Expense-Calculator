import { useEffect } from "react";

function ExpenseList(props, a = 0) {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <h1>{a}</h1>
      <ul>
        {props.expenses.map((expense, index) => (
          <li key={index}>
            <div>{expense.title}</div>
            <div>{expense.amount}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExpenseList;
