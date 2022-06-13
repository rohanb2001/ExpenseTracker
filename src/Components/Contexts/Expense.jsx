import React, { createContext, useReducer } from "react";

const initialState = {
  income: sessionStorage.getItem("income")
    ? JSON.parse(sessionStorage.getItem("income"))
    : 0,
  expense: sessionStorage.getItem("expense")
    ? JSON.parse(sessionStorage.getItem("expense"))
    : 0,
  balance: sessionStorage.getItem("balance")
    ? JSON.parse(sessionStorage.getItem("balance"))
    : 0,
  history: sessionStorage.getItem("history")
    ? JSON.parse(sessionStorage.getItem("history"))
    : [],
};

export const TransactionContext = createContext(initialState);

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "INCOME":
      let newIncome = state.income + action.payload;
      sessionStorage.setItem("income", JSON.stringify(newIncome));
      return {
        ...state,
        income: newIncome,
      };
    case "EXPENSE":
      let newExpense = state.expense + action.payload;
      sessionStorage.setItem("expense", JSON.stringify(newExpense));
      return {
        ...state,
        expense: newExpense,
      };
    case "BALANCE":
      let newBalance = parseInt(state.income) + parseInt(state.expense);
      sessionStorage.setItem("balance", JSON.stringify(newBalance));
      return {
        ...state,
        balance: newBalance,
      };
    case "ADD_HISTORY":
      let newHistory = [...state.history, action.payload];
      sessionStorage.setItem("history", JSON.stringify(newHistory));
      return {
        ...state,
        history: newHistory,
      };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const addIncome = (value) => {
    dispatch({
      type: "INCOME",
      payload: +value.amount,
    });

    totalBalance();
    addHistory(value, "income");
  };

  const addExpense = (value) => {
    dispatch({
      type: "EXPENSE",
      payload: +value.amount,
    });

    totalBalance();
    addHistory(value, "expense");
  };

  const totalBalance = () => {
    dispatch({
      type: "BALANCE",
    });
  };

  const addHistory = (value, category) => {
    dispatch({
      type: "ADD_HISTORY",
      payload: { ...value, category },
    });
  };

  return (
    <TransactionContext.Provider
      value={{ state, addIncome, addExpense, totalBalance }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
