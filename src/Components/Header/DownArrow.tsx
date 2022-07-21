import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;

export default function DownArrow() {
  return <Container>▾</Container>;
}
