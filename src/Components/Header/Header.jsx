import React, { useContext } from "react";
import { TransactionContext } from "../Contexts/Expense";
import {
  HeaderContent,
  AmountHeading,
  TrackerBox,
  Income,
  Expense,
  Line,
} from "./Header.styles";

const Header = () => {
  const { state } = useContext(TransactionContext);
  return (
    <>
      <HeaderContent>
        <AmountHeading>
          <h3>YOUR BALANCE</h3>
          <h1>$260.00</h1>
        </AmountHeading>
        <TrackerBox>
          <Income>
            <h3>INCOME</h3>
            <h2>${state.income}</h2>
          </Income>
          <Line></Line>
          <Expense>
            <h3>EXPENSE</h3>
            <h2>${state.expense}</h2>
          </Expense>
        </TrackerBox>
      </HeaderContent>
    </>
  );
};

export default Header;
