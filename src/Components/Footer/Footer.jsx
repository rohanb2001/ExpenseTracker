import React, { useContext } from "react";
import { AddTransactionContainer, Heading } from "./Footer.styles";

import FormInput from "../Form/FormInput";
import Form from "../Form/Form";
import { TransactionContext } from "../Contexts/Expense";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const { addIncome, addExpense, state } = useContext(TransactionContext);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    let amount = parseInt(values.amount);
    if (amount < 0) {
      if (state.income < parseInt(amount.toString().substr(1))) {
        return toast.error("Expense value exceeded! ", {
          theme: "light",
        });
      }
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
      <ToastContainer />
    </>
  );
};

export default Footer;
