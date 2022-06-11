import React, { createContext, useReducer } from "react";

const initialState = {
  income: 0,
  expense: 0,
  balance: 0,
};

export const TransactionContext = createContext(initialState);

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "INCOME":
      return {
        ...state,
        income: action.payload,
      };
    case "EXPENSE":
      return {
        ...state,
        expense: action.payload,
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
  };

  const addExpense = (value) => {
    dispatch({
      type: "EXPENSE",
      payload: +value.amount,
    });
  };

  return (
    <TransactionContext.Provider value={{ state, addIncome, addExpense }}>
      {children}
    </TransactionContext.Provider>
  );
};
