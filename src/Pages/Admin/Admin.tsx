import React from "react";
import styled from "styled-components";
import FileAttach from "../../Components/FileAttach/FileAttach";
import HrCreator from "../../Components/HrCreator/HrCreator";

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
