import React, { useContext } from "react";
import { TransactionContext } from "../Contexts/Expense";
import {
  Content,
  CrossBlock,
  TransactionHistory,
  Color,
} from "./Transactions.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transactions = ({ open }) => {
  const { state, deleteHistory } = useContext(TransactionContext);

  const handleDelete = (item) => {
    console.log(item, state);

    let remainingIncome = state.income - parseInt(item.amount);
    // let allow =
    //   remainingIncome > parseInt(state.expense.toString().substr(1))
    //     ? true
    //     : false;

    if (remainingIncome > parseInt(state.expense)) {
      if (remainingIncome === 0) {
        toast.error("Expense cannot be higher!");
      } else {
        deleteHistory(item);
      }
    } else {
      toast.error("Expense cannot be higher!");
    }
  };

  return (
    <>
      {state.history
        .slice(0, +`${!open ? 3 : state.history.length}`)
        .map((item, idx) => (
          <Content key={idx}>
            <CrossBlock onClick={() => handleDelete(item)}>x</CrossBlock>
            <TransactionHistory>
              <p>{item.history}</p>
              <p>{item.amount}</p>
            </TransactionHistory>
            <Color bgColor={parseInt(item.amount) < 0 ? "-" : "+"}></Color>
          </Content>
        ))}

      <ToastContainer />
    </>
  );
};

export default Transactions;
