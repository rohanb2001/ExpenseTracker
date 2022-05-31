import "./App.css";
import styled from "styled-components";
import { Container } from "./globalStyles";
import GlobaStyle from "./globalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Description from "./Components/Section/Description";

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobaStyle />
      <Navbar />
      <Header />
      <Description />
    </AppContainer>
  );
}

export default App;
