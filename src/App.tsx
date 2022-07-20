import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Pages/Login";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function App() {
  return (
    <Container className="app">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
