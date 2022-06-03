import React from "react";
import { AddTransactionContainer, Heading, FormContent } from "./Footer.styles";

import { GenericButton } from "../GenericButton/GenericButton";
import useExpenseCalculation from "../../Hooks/useExpenseCalculation";

const Footer = () => {
  const { handleSubmit, handleTextChange, handleAmountChange, ...options } =
    useExpenseCalculation();

  return (
    <>
      <AddTransactionContainer>
        <Heading>
          <h2>Add new transaction</h2>
        </Heading>
        <FormContent onSubmit={handleSubmit}>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={options.InputTextValue}
            onChange={(e) => handleTextChange(e)}
          />
          <label htmlFor="amount">
            Amount<br></br>(negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={options.InputAmountValue}
            onChange={(e) => handleAmountChange(e)}
          />
          <GenericButton type="submit">Add transaction</GenericButton>
        </FormContent>
      </AddTransactionContainer>
    </>
  );
};

export default Footer;
