import React from "react";
import {
  DescriptionContainer,
  Heading,
  TransactionContent,
  Content,
  TransactionHistory,
  Color,
} from "./Description.styles";

const Description = () => {
  return (
    <>
      <DescriptionContainer>
        <Heading>
          <h2>History</h2>
        </Heading>
        <TransactionContent>
          <Content>
            <TransactionHistory>
              <p>Cash</p>
              <p>+500</p>
            </TransactionHistory>
            <Color></Color>
          </Content>
          <Content>
            <TransactionHistory>
              <p>Book</p>
              <p>-40</p>
            </TransactionHistory>
            <Color></Color>
          </Content>
          <Content>
            <TransactionHistory>
              <p>Camera</p>
              <p>-200</p>
            </TransactionHistory>
            <Color></Color>
          </Content>
        </TransactionContent>
      </DescriptionContainer>
    </>
  );
};

export default Description;