import React from "react";
import styled from "styled-components";

interface PropsTypes {
  text: string;
  fn: () => void;
  backgroundColor: string;
}

const Container = styled.button`
  height: 27px;
  border: none;
  color: #f7f7f7;
  font: normal 16px/27px Catamaran;
`;

export default function Button({ text, fn, backgroundColor }: PropsTypes) {
  return (
    <Container type="button" onClick={fn} style={{ backgroundColor }}>
      {text}
    </Container>
  );
}
