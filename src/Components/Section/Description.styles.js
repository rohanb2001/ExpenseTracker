import styled from "styled-components";

export const DescriptionContainer = styled.div`
  height: 250px;
  width: 500px;
  margin: 16px 0;
`;

export const Heading = styled.div`
  width: 100%;
  border-bottom: 1px solid #ff6666;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  span {
    color: #b31217;
    font-weight: bold;
    letter-spacing: 1.3px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const TransactionContent = styled.div`
  margin: 10px 0;
`;
