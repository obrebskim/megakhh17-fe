import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CuriculumVitae from "./Pages/CuriculumVitae/CuriculumVitae";
import Login from "./Pages/Login/Login";
import Students from "./Pages/Students/Students";
import TalkReservation from "./Components/StudentsList/TalkReservation/TalkReservation";
import AvailableStudents from "./Components/StudentsList/AvailableStudents/AvailableStudents";
import Account from "./Pages/Account/Account";
import ResetForm from "./Pages/PwdRecovery/ResetForm";
import RecoveryForm from "./Pages/PwdRecovery/RecoveryForm";


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
          <Route path="list" element={<AvailableStudents />} />
          <Route path="talk-reservation" element={<TalkReservation />} />
        </Route>
        <Route path="curiculum-vitae/:id" element={<CuriculumVitae />} />
        <Route path="account" element={<Account />} />
        <Route path="pwd-recovery" element={<RecoveryForm />} />
        <Route path="pwd-recovery/:id/:token" element={<ResetForm />} />
      </Routes>
    </Container>
  );
}

export default App;
