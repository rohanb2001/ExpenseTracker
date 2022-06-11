import React, { useContext } from "react";
import { AddTransactionContainer, Heading } from "./Footer.styles";

import FormInput from "../Form/FormInput";
import Form from "../Form/Form";
import { TransactionContext } from "../Contexts/Expense";

const Footer = () => {
  const { addIncome, addExpense } = useContext(TransactionContext);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    if (parseInt(values.amount) < 0) {
      addExpense(values);
    } else {
      addIncome(values);
    }
  };

  return (
    <>
      <AddTransactionContainer>
        <Heading>
          <h2>Add new transaction</h2>
        </Heading>
        <Form
          initialValues={{ history: "", amount: 0 }}
          handleSubmit={handleSubmit}
        >
          <FormInput
            type="text"
            placeholder="Enter history..."
            name="history"
            labelContent="Text"
          />
          <FormInput
            type="number"
            placeholder="Enter amount..."
            name="amount"
            labelContent="Amount (negative - expense, positive - income)"
          />
        </Form>
      </AddTransactionContainer>
    </>
  );
};

export default Footer;
