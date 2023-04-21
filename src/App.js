// import { useEffect, useState, useRef, useMemo } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import Navbar from "./components/Navbar";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import useExpenseTracker from "./useExpenseTracker";

function App() {
  // const [timer, setTimer] = useState(0);
  // const [cal, setCal] = useState(0);
  // const hr = useRef(0);
  // const min = useRef(0);
  // const [hr, setHr] = useState(0);
  // const [min, setMin] = useState(0);
  // const [sec, setSec] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSec(sec + 1);
  //   }, 1000);
  //   if (sec == 5) {
  //     min.current += 1;
  //     // setMin(min + 1);
  //     setSec(1);
  //   }
  //   if (min.current == 5) {
  //     hr.current += 1;
  //     min.current = 0;
  //     // setHr(hr + 1);
  //     // setMin(0);
  //   }
  // }, [sec]);

  // const expCal = useMemo(() => {
  //   // not re-render every time till dependencies are not changed
  //   // perform exp cal here
  //   return expCal;
  // }, [cal]); // dependencies

  // useCallback() -> to log event, mainupulate data, to add event listener
  // doesn't alter source code till any of these changes

  // const [expenses, setExpenses] = useState([]);
  // const { expenses, addExpense } = useExpenseTracker();

  // const addExpense = useCallback((expense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses, expense]);
  // }, []);
  // const [price, setPrice] = useState(100);
  // const [years, setYears] = useState(0);
  // const [data, setData] = useState([
  //   { id: 1, Name: "Joe", Type: "Developer", age: 20 },
  //   { id: 2, Name: "Hill", Type: "Designer", age: 25 },
  //   { id: 3, Name: "John", Type: "Teacher", age: 30 },
  //   { id: 4, Name: "Sam", Type: "Entreprenuer", age: 50 },
  //   { id: 5, Name: "Jack", Type: "Designer", age: 70 },
  // ]);

  return (
    <div className="App">
      {/* <h1>${price}</h1>
      <button onClick={setPrice(75)}> Get Discount</button>
      <br />
      <select
        onChange={(e) => {
          switch (e.target.value) {
            case "type":
              let a = data.filter((el) => el.Type === "Designer");
              setData(a);
              break;
            case "j":
              let b = data.filter((el) => el.Name[0] === "J");
              setData(b);
              break;
            case "age":
              let c = data.filter((el) => el.age > 28 && el.age <= 50);
              setData(c);
              break;
          }
        }}>
        <option>Filter</option>
        <option value={"type"}>User Type</option>
        <option value={"j"}>Name with J</option>
        <option value={"age"}>28-50</option>
      </select>
      <button
        onClick={() => {
          setYears(ini);
        }}>
        Total Years of Designers
      </button>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h3>id: {el.id}</h3>
            <h3>Name: {el.Name}</h3>
            <h3>User Type: {el.Type}</h3>
          </div>
        );
      })} */}

      {/* <h1>
        {hr.current}:{min.current}:{sec}
      </h1>
      <button onClick={() => setCal(cal + 1)}>click</button>
      <h2>{cal}</h2> */}
      <Navbar />
      <Expenses />
      {/* <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} /> */}
    </div>
  );
}

export default App;

// state effect to set a timer update state variable every sec

// Component life cycle
// 1. Mounting state -> a) constructor, b) get derived state from props, c) reneder the component, d) component did mount
// 2. Updating -> a) get derived state from props, b) should component be updated, c) render, d) did component updated
// 3. Unmounting -> remove component use
