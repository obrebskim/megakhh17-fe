import React from "react";
import styled from "styled-components";
import FileAttach from "../../Components/FileAttach";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
`;

function Admin() {
  return (
    <Container>
      <Wrapper>
        <FileAttach />
      </Wrapper>
    </Container>
  );
}

export default Admin;
