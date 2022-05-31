import styled from "styled-components";

export const GenericButton = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  font-size: 17px;
  padding: 12px 25px;
  background: linear-gradient(
    to right,
    #fdbb2d,
    #22c1c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  margin: 15px auto;
  cursor: pointer;
  border: none;
  outline: none;
  letter-spacing: 1.5px;
  border-radius: 5px;
  box-shadow: 10px 10px 26px -15px rgba(224, 163, 196, 1);
`;
