import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FileAttach from "../../Components/FileAttach/FileAttach";
import HrCreator from "../../Components/HrCreator/HrCreator";
import { selectUser } from "../../State/Store/store";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  width: 1170px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Admin() {
  const user = useSelector(selectUser);

  if (user.role !== 1) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Wrapper>
        <FileAttach />
        <HrCreator />
      </Wrapper>
    </Container>
  );
}

export default Admin;
