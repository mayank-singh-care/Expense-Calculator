import React, { useRef, useState } from "react";
import { arr } from "../data.js";
import "./Expenses.css";
import {
  Chart as ChartJS,
  // CategoryScale,
  // LinearScale,
  // BarElement,
  // PointElement,
  // LineElement,
  // Title,
  // Filler,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Expense from "./Expense.js";
import MothExpense from "./MothExpense.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Expenses() {
  const inputRef = useRef({ title: "", expense: 0, date: "" });
  const [show, setShow] = useState(0);
  const [monthExpenses, setMonthExpenses] = useState([]);
  const [chartIdx, setChartIdx] = useState(0);
  const [sortBy, setSortBy] = useState("date");
  // console.log(arr);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button onClick={() => setChartIdx(0)}>Normal</button>
        <button onClick={() => setChartIdx(1)}>Bar</button>
        <button onClick={() => setChartIdx(2)}>Line</button>
        <button onClick={() => setChartIdx(3)}>Area</button>
        <button onClick={() => setChartIdx(4)}>Pie</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "20px",
          boxShadow: "red 0px 3px 20px",
          margin: "20px",
          padding: "20px",
        }}>
        <MothExpense
          chartIdx={chartIdx}
          setMonthExpenses={setMonthExpenses}
          setShow={setShow}
          show={show}
          monthExpenses={monthExpenses}
        />
      </div>
      {show != 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}>
          <div style={{ width: "60%" }}>
            <input
              id="title"
              ref={(ref) => (inputRef.current.title = ref)}
              type={"text"}
              required
            />
            <input
              id="expense"
              ref={(ref) => (inputRef.current.expense = ref)}
              type={"number"}
              required
            />
            <input
              id="date"
              ref={(ref) => (inputRef.current.date = ref)}
              type={"date"}
              required
            />
            <button
              onClick={() => {
                const obj = {
                  title: inputRef.current.title.value,
                  expense: +inputRef.current.expense.value,
                  date: inputRef.current.date.value,
                };
                if (inputRef.current.title.value == 0) {
                }
                setMonthExpenses((p) => [...p, obj]);
                arr[show].expenses.push(obj);
              }}>
              Add Expense
            </button>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setSortBy(e.target.value);
              }}>
              <option value={"title"}>Sort By Title</option>
              <option value={"expense"}>Sort By Expense</option>
              <option value={"date"}>Sort By Date</option>
            </select>
            {monthExpenses &&
              monthExpenses
                .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
                .map((e, i) => (
                  <Expense
                    key={i}
                    title={e.title}
                    date={e.date}
                    expense={e.expense}
                  />
                ))}
          </div>
          <div>
            <Doughnut
              data={{
                labels: monthExpenses.map((e) => e.title),
                datasets: [
                  {
                    label: "Expense",
                    data: monthExpenses.map((e) => e.expense),
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Expenses;
