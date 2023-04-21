import React from "react";
import { arr } from "../data.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement
);

function MothExpense(props) {
  console.log(props.mothExpenses, props.show, arr[props.show]);
  return (
    <>
      {props.chartIdx == 0 &&
        arr.map((e, i) => (
          <div
            key={i}
            onClick={() => {
              props.setShow(i);
              props.setMonthExpenses(e.expenses);
            }}
            className="expense"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "-30px",
              padding: "10px",
              borderRadius: "10px",
            }}>
            <div
              style={{
                border: "1px solid black",
                height: "100px",
                width: "10px",
                borderRadius: "10px",
                backgroundSize: "20px",
              }}>
              <div
                style={{
                  height: "50%",
                  backgroundColor: "red",
                }}></div>
            </div>
            <h3>{e.month}</h3>
            <h3>
              ${e.expenses.reduce((total, exp) => total + exp.expense, 0)}
            </h3>
          </div>
        ))}
      {props.chartIdx == 1 && (
        <div>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  //   position: 'top' as const,
                },
                title: {
                  display: true,
                  text: "Bar Chart",
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "Septempber",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Expenses",
                  data: arr[props.show].expenses.reduce(
                    (total, exp) => total + exp.expense,
                    0
                  ),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                // {
                //   label: "Dataset 2",
                //   data: labels.map(() =>
                //     faker.datatype.number({ min: 0, max: 1000 })
                //   ),
                //   backgroundColor: "rgba(53, 162, 235, 0.5)",
                // },
              ],
            }}
          />
        </div>
      )}
      {props.chartIdx == 2 && (
        <div>
          <Line
            options={{
              responsive: true,
              interaction: {
                // mode: 'index' as const,
                intersect: false,
              },
              stacked: false,
              plugins: {
                title: {
                  display: true,
                  text: "Chart.js Line Chart - Multi Axis",
                },
              },
              scales: {
                y: {
                  // type: 'linear' as const,
                  display: true,
                  // position: 'left' as const,
                },
                y1: {
                  // type: 'linear' as const,
                  display: true,
                  // position: 'right' as const,
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "Septempber",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Expenses",
                  data: arr[props.show].expenses.reduce(
                    (total, exp) => total + exp.expense,
                    0
                  ),
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  yAxisID: "y",
                },
                {
                  label: "Expenses",
                  data: arr[props.show].expenses.reduce(
                    (total, exp) => total + exp.expense,
                    0
                  ),
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  yAxisID: "y1",
                },
                // {
                //   label: "Dataset 2",
                //   data: labels.map(() =>
                //     faker.datatype.number({ min: 0, max: 1000 })
                //   ),
                //   backgroundColor: "rgba(53, 162, 235, 0.5)",
                // },
              ],
            }}
          />
        </div>
      )}
    </>
  );
}

export default MothExpense;
