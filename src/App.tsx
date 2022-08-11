import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./State/Store/store";
import CuriculumVitae from "./Pages/CuriculumVitae/CuriculumVitae";
import Login from "./Pages/Login/Login";
import Students from "./Pages/Students/Students";
import TalkReservation from "./Components/StudentsList/TalkReservation/TalkReservation";
import AvailableStudents from "./Components/StudentsList/AvailableStudents/AvailableStudents";
import Admin from "./Pages/Admin/Admin";
import Account from "./Pages/Account/Account";
import ResetForm from "./Pages/PwdRecovery/ResetForm";
import RecoveryForm from "./Pages/PwdRecovery/RecoveryForm";
import Register from "./Pages/Register/Register";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function App() {
  return (
    <Provider store={store}>
      <Container className="app">
        <Routes>
          <Route index element={<Login />} />
          <Route path="students" element={<Students />}>
            <Route path="list" element={<AvailableStudents />} />
            <Route path="talk-reservation" element={<TalkReservation />} />
          </Route>
          <Route path="admin" element={<Admin />} />
          <Route path="curiculum-vitae/:id" element={<CuriculumVitae />} />
          <Route path="account" element={<Account />} />
          <Route path="pwd-recovery" element={<RecoveryForm />} />
          <Route path="pwd-recovery/:id/:token" element={<ResetForm />} />
          <Route path="register-student/:id" element={<Register />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
