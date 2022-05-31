import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  background: #0099f7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f11712,
    #0099f7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f11712,
    #0099f7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  letter-spacing: 1.2px;
  border-bottom: 1px solid #333;
  margin: 15px auto;
`;

const Navbar = () => {
  return <Heading>Expense Tracker</Heading>;
};

export default Navbar;
