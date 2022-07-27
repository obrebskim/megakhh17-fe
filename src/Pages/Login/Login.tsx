import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Common/Logo/Logo";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Container = styled.main`
  width: 400px;
  height: 250px;
  display: grid;
  place-items: center;
  background-color: var(--primaryDark);
  & div img {
    width: 124px;
    height: 76px;
  }
`;

export default function Login() {
  return (
    <Container>
      <Logo width="124px" height="76px" />
      <LoginForm />
    </Container>
  );
}
