import React from "react";
import "./App.css";
import Game from "./components/Game";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-left: 30px;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <h1>Tic Tac Toe</h1>
      <Game />
    </Container>
  );
}

export default App;
