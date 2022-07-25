import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Common/Logo/Logo";

const Container = styled.main`
  width: 400px;
  height: 400px;
  display: grid;
  place-items: center;
  background-color: var(--secondaryDark);
`;

export default function Login() {
  return (
    <Container>
      <Logo width="25%" />
    </Container>
  );
}
