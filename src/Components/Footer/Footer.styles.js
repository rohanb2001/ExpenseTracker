import styled from "styled-components";

export const AddTransactionContainer = styled.div`
  height: 260px;
  width: 500px;
  margin: 5px 0;
`;

export const Heading = styled.div`
  width: 100%;
  border-bottom: 1px solid #ff6666;

  h2 {
    background: #5f2c82; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #49a09d,
      #5f2c82
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #49a09d,
      #5f2c82
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1.1px;
    margin-bottom: 7px;
    font-size: 24px;
    /* text-transform: uppercase; */
  }
`;
