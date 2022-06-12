import React, { useContext } from "react";
import { TransactionContext } from "../Contexts/Expense";
import {
  Content,
  CrossBlock,
  TransactionHistory,
  Color,
} from "./Transactions.styles";

const Transactions = ({ open }) => {
  const { state } = useContext(TransactionContext);
  return state.history
    .slice(0, +`${!open ? 3 : state.history.length}`)
    .map((item, idx) => (
      <Content key={idx}>
        <CrossBlock>x</CrossBlock>
        <TransactionHistory>
          <p>{item.history}</p>
          <p>
            {item.category === "income" ? "+" : "-"}
            {item.amount}
          </p>
        </TransactionHistory>
        <Color></Color>
      </Content>
    ));
};

export default Transactions;
