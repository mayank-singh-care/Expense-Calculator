import { useState, useCallback } from "react";

// custom hook to build reusable hooks

function useExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  }, []);

  return {
    expenses,
    addExpense,
  };
}

export default useExpenseTracker;
