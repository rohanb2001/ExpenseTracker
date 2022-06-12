import React, { createContext, useReducer } from "react";

const initialState = {
  income: 0,
  expense: 0,
  balance: 0,
  history: [],
};

export const TransactionContext = createContext(initialState);

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "INCOME":
      return {
        ...state,
        income: state.income + action.payload,
      };
    case "EXPENSE":
      return {
        ...state,
        expense: state.expense + action.payload,
      };
    case "BALANCE":
      return {
        ...state,
        balance: parseInt(state.income) + parseInt(state.expense),
      };
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
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
