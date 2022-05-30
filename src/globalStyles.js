import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobaStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400&display=swap');

* {
    box-sizing: border-box ;
    margin: 0 ;
    padding:0 ;
}

body {
    font-family:'Jost', sans-serif ;
    background: #e6ffff
}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export default GlobaStyle;
