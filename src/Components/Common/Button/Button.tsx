import React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 27px;
  background-color: var(--buttonColor);
  border: none;
`;
export default function Button() {
  return <Container>Button</Container>;
}
