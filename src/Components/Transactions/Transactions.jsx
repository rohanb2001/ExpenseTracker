import React from "react";
import {
  Content,
  CrossBlock,
  TransactionHistory,
  Color,
} from "./Transactions.styles";

const Transactions = () => {
  return (
    <>
      <Content>
        <CrossBlock>x</CrossBlock>
        <TransactionHistory>
          <p>Cash</p>
          <p>+30</p>
        </TransactionHistory>
        <Color></Color>
      </Content>
      <Content>
        <CrossBlock>x</CrossBlock>
        <TransactionHistory>
          <p>Book</p>
          <p>-40</p>
        </TransactionHistory>
        <Color></Color>
      </Content>
      <Content>
        <CrossBlock>x</CrossBlock>
        <TransactionHistory>
          <p>Camera</p>
          <p>-200</p>
        </TransactionHistory>
        <Color></Color>
      </Content>
    </>
  );
};

export default Transactions;
