import React from "react";
import styled from "styled-components";
import RegisterAside from "../../Components/RegisterAside/RegisterAside";
import RegisterMain from "../../Components/RegisterMain/RegisterMain";
import UserRegisterProvider from "../../Context/UserRegisterContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 1430px;
  margin: auto;
  display: grid;
  grid-template-columns: 250px auto;
  gap: 5px;
  padding: 30px 0;
`;

function Register() {
  return (
    <Container>
      <UserRegisterProvider>
        <Wrapper>
          <RegisterAside />
          <RegisterMain />
        </Wrapper>
      </UserRegisterProvider>
    </Container>
  );
}

export default Register;
