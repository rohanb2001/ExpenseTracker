import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  background: #22c1c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fdbb2d,
    #22c1c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fdbb2d,
    #22c1c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  letter-spacing: 1.2px;
  border-bottom: 1px solid #ff6666;
  margin: 15px auto;
`;

const Navbar = () => {
  return <Heading>Expense Tracker</Heading>;
};

export default Navbar;
