import React from "react";
import styled from "styled-components";

interface PropsTypes {
  text: string;
  onClick: () => void;
}

const Container = styled.button`
  background-color: ${props => props.color};
  border: none;
  color: var(--fontColor);
`;

export default function Button({ text, onClick }: PropsTypes) {
  return (
    <Container type="button" onClick={onClick}>
      {text}
    </Container>
  );
}
