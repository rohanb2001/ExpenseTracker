import React from "react";
import {
  DescriptionContainer,
  Heading,
  TransactionContent,
  Content,
  CrossBlock,
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
            <CrossBlock>x</CrossBlock>
            <TransactionHistory>
              <p>Cash</p>
              <p>+500</p>
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
        </TransactionContent>
      </DescriptionContainer>
    </>
  );
};

export default Description;
