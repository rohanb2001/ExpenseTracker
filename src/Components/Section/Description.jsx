import React, { useContext, useState } from "react";
import {
  DescriptionContainer,
  Heading,
  TransactionContent,
} from "./Description.styles";

import Transactions from "../Transactions/Transactions";
import ModalWrapper from "../Modal/Modal";
import { TransactionContext } from "../Contexts/Expense";

const Description = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(TransactionContext);
  return (
    <>
      <DescriptionContainer>
        <Heading>
          <h2>History</h2>
          {state.history.length > 3 && (
            <span onClick={() => setOpen(true)}>View all</span>
          )}
        </Heading>
        <ModalWrapper open={open} setOpen={setOpen}>
          <TransactionContent>
            <Transactions open={open} />
          </TransactionContent>
        </ModalWrapper>
      </DescriptionContainer>
    </>
  );
};

export default Description;
