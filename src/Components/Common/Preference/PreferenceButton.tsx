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
  margin-right: 8px;
  padding: 4px 10px;
  color: var(--fontColor);
  font-size: 12px;
`;

export default function PreferenceButton({ text, onClick, color }: PropsTypes) {
  return (
    <Container color={color} type="button" onClick={onClick}>
      {text}
    </Container>
  );
}
