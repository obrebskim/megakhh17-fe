import React from "react";
import styled from "styled-components";

interface StyledPropsTypes {
  context: "accept" | "reject";
}

const Container = styled.div<StyledPropsTypes>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & .wrapper {
    width: 400px;
    height: 400px;
    background-color: yellowgreen;
  }
`;

function Modal() {
  return (
    <Container context="accept">
      <div className="wrapper">some text</div>
      <button type="button">close</button>
    </Container>
  );
}

export default Modal;
