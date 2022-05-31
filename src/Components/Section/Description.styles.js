import styled from "styled-components";

export const DescriptionContainer = styled.div`
  height: 250px;
  width: 500px;
  margin: 16px 0;
`;

export const Heading = styled.div`
  width: 100%;
  border-bottom: 1px solid #ff6666;

  h2 {
    background: #e52d27; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #b31217,
      #e52d27
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #b31217,
      #e52d27
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2.5px;
    margin-bottom: 6px;
    font-size: 25px;
    /* text-transform: uppercase; */
  }
`;

export const TransactionContent = styled.div`
  margin: 10px 0;
`;

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
