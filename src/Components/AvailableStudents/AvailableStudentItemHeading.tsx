import React from "react";
import styled from "styled-components";
import ArrowButton from "../Common/ArrowButton/ArrowButton";

type StyledProps = {
  open: boolean;
};

const Container = styled.div<StyledProps>`
  min-height: 70px;
  display: grid;
  grid-template-columns: auto 168px 30px;
  gap: 15px;
  align-items: center;
  padding: 0 20px;
  border: none;
  background-color: transparent;
  & img {
    transform: rotate(${(props) => (!props.open ? "180deg" : "0")});
  }
`;

interface PropsTypes {
  onclick: () => void;
  open: boolean;
}

function AvailableStudentItemHeading({ open, onclick }: PropsTypes) {
  return (
    <Container open={open}>
      <p>Name .S</p>
      <button type="button">button</button>
      <ArrowButton open={open} onclick={onclick} />
    </Container>
  );
}

export default AvailableStudentItemHeading;
