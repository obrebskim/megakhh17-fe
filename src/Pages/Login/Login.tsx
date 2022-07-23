import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Common/Logo/Logo";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Container = styled.main`
  width: 200px;
  height: 200px;
  display: grid;
  place-items: center;
  background-color: var(--primaryDark);
`;

export default function Login() {
  return (
    <Container>
      <Logo width="25%" />
      <LoginForm />
    </Container>
  );
}
