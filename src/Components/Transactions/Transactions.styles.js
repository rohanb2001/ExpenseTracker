import styled from "styled-components";

export const CrossBlock = styled.div`
  position: absolute;
  left: 5%;
  top: 13px;
  padding: 6px 11px;
  background: #e52d27;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  z-index: -1;
  opacity: 0;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 17px auto;
  box-shadow: 10px 10px 26px -15px rgba(224, 163, 196, 1);
  z-index: 1;

  &:hover ${CrossBlock} {
    opacity: 1;
    transform: translateX(-170%);
    transition: all 0.5s ease;
    cursor: pointer;
  }
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
  border-bottom: 1px solid #ccc;
`;

export const Color = styled.div`
  width: 1.3%;
  background: #99cc00;
`;
