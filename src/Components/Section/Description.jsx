import React, { useEffect } from "react";
import {
  DescriptionContainer,
  Heading,
  TransactionContent,
} from "./Description.styles";

import Transactions from "../Transactions/Transactions";

const Description = () => {
  return (
    <>
      <DescriptionContainer>
        <Heading>
          <h2>History</h2>
        </Heading>
        <TransactionContent>
          <Transactions />
        </TransactionContent>
      </DescriptionContainer>
    </>
  );
};

export default Description;
