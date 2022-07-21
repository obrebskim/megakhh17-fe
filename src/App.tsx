import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CuriculumVitae from "./Pages/CuriculumVitae/CuriculumVitae";
import Login from "./Pages/Login/Login";
import Students from "./Pages/Students/Students";
import TalkReservation from "./Pages/TalkReservation/TalkReservation";

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
        <Route index element={<Login />} />
        <Route path="students" element={<Students />}>
          <Route path="talk-reservation" element={<TalkReservation />} />
          <Route path=":id" element={<CuriculumVitae />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
