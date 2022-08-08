import React from "react";
import styled from "styled-components";
import arrowImg from "../../../Assets/img/arrow.svg";

type StyledProps = { open: boolean };

const Container = styled.button<StyledProps>`
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & img {
    transform: rotate(${(props) => (!props.open ? "180deg" : "0")});
  }
`;

interface PropsTypes {
  open: boolean;
  onclick: () => void;
}

function ArrowButton({ open, onclick }: PropsTypes) {
  return (
    <Container open={open} onClick={onclick}>
      <img src={arrowImg} alt="" />
    </Container>
  );
}

export default ArrowButton;
