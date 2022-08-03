import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;

interface PropsTypes {
  onclick: () => void;
}

export default function DownArrow({ onclick }: PropsTypes) {
  return <Container onClick={onclick}>▾</Container>;
}
