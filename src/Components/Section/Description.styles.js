import styled from "styled-components";

export const DescriptionContainer = styled.div`
  height: 500px;
  width: 500px;
  margin: 20px 0;
`;

export const Heading = styled.div`
  width: 100%;
  border-bottom: 1px solid #ff9999;

  h2 {
    letter-spacing: 2.5px;
    margin-bottom: 10px;
    font-size: 25px;
    /* text-transform: uppercase; */
  }
`;

export const TransactionContent = styled.div`
  margin: 10px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 25px auto;
  box-shadow: 10px 10px 26px -15px rgba(224, 163, 196, 1);
  border-bottom: 1px solid #ccc;
`;

export const TransactionHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 13px;
  height: 49px;
  width: 98.7%;
  font-weight: bold;
  font-size: 18px;
`;

export const Color = styled.div`
  width: 1.3%;
  background: #99cc00;
`;
