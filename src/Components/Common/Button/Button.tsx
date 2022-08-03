import React from "react";
import styled from "styled-components";

interface PropsTypes {
  text: string;
  onClick?: () => void;
  color: string;
}

const Container = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  color: var(--fontColor);
`;

export default function Button({ text, onClick, color }: PropsTypes) {
  return (
    <Container color={color} type="submit" onClick={onClick}>
      {text}
    </Container>
  );
}
