import React from "react";
import styled from "styled-components";
import logo from "../../../Assets/img/logo.webp";

interface PropsTypes {
  width?: string;
  height?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  & img {
    width: 90%;
  }
`;

export default function Logo({ width = "100%", height = "100%" }: PropsTypes) {
  return (
    <Container style={{ width, height }}>
      <img src={logo} alt="logo" />
    </Container>
  );
}
