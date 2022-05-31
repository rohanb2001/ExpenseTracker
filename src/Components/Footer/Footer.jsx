import React from "react";
import { AddTransactionContainer, Heading, FormContent } from "./Footer.styles";

import { GenericButton } from "../GenericButton/GenericButton";

const Footer = () => {
  return (
    <>
      <AddTransactionContainer>
        <Heading>
          <h2>Add new transaction</h2>
        </Heading>
        <FormContent>
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
          <label htmlFor="amount">
            Amount<br></br>(negative - expense, positive - income)
          </label>
          <input type="text" placeholder="Enter amount..." />
          <GenericButton>Add transaction</GenericButton>
        </FormContent>
      </AddTransactionContainer>
    </>
  );
};

export default Footer;
