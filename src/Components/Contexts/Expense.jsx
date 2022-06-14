import React, { createContext, useReducer } from "react";

const initialState = {
  history: sessionStorage.getItem("history")
    ? JSON.parse(sessionStorage.getItem("history"))
    : [],

  income: sessionStorage.getItem("income")
    ? JSON.parse(sessionStorage.getItem("income"))
    : 0,
  expense: sessionStorage.getItem("expense")
    ? JSON.parse(sessionStorage.getItem("expense"))
    : 0,
  balance: sessionStorage.getItem("balance")
    ? JSON.parse(sessionStorage.getItem("balance"))
    : 0,
};

export const TransactionContext = createContext(initialState);

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HISTORY":
      let newHistory =
        action.payload !== null
          ? [...state.history, action.payload]
          : [...state.history];
      let newIncome = newHistory.reduce((acc, curr) => {
        let amount = parseInt(curr.amount);
        if (amount > 0) {
          return acc + amount;
        } else {
          return acc;
        }
      }, 0);
      let newExpense = newHistory.reduce((acc, curr) => {
        let amount = parseInt(curr.amount);
        if (amount < 0) {
          return acc + amount;
        } else {
          return acc;
        }
      }, 0);
      let newBalance = newIncome + newExpense;
      sessionStorage.setItem("history", JSON.stringify(newHistory));
      sessionStorage.setItem("income", JSON.stringify(newIncome));
      sessionStorage.setItem("expense", JSON.stringify(newExpense));
      sessionStorage.setItem("balance", JSON.stringify(newBalance));
      return {
        ...state,
        history: newHistory,
        income: newIncome,
        expense: newExpense,
        balance: newBalance,
      };
    case "DELETE_HISTORY":
      let filterHistory = state.history.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        history: filterHistory,
      };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const addHistory = (value) => {
    dispatch({
      type: "ADD_HISTORY",
      payload: value,
    });
  };

  const deleteHistory = (value) => {
    dispatch({
      type: "DELETE_HISTORY",
      payload: value.id,
    });

    addHistory(null);
  };

  return (
    <TransactionContext.Provider value={{ state, addHistory, deleteHistory }}>
      {children}
    </TransactionContext.Provider>
  );
};
