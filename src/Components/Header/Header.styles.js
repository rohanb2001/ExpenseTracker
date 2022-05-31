import styled from "styled-components";

export const HeaderContent = styled.div`
  height: 220px;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const AmountHeading = styled.div`
  width: 100%;
  padding: 17px 5px;

  h3 {
    letter-spacing: 1.2px;
  }
`;

export const TrackerBox = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background: #fff;
  text-align: center;
  box-shadow: 10px 10px 20px -16px rgba(184, 116, 184, 1);
  border-radius: 10px;
`;

export const Income = styled.div`
  width: 200px;
  text-align: center;
  margin: 0 auto;
  padding: 17px 0;
  letter-spacing: 1.7px;

  h2 {
    color: #99cc00;
    margin-top: 5px;
  }
`;

export const Line = styled.div`
  height: 56px;
  width: 0.1px;
  background: #dcdcdc;
  margin: auto 0;
`;

export const Expense = styled.div`
  width: 200px;
  text-align: center;
  margin: 0 auto;
  padding: 17px 0;
  letter-spacing: 1.7px;

  h2 {
    color: #f20d0d;
    margin-top: 5px;
  }
`;
