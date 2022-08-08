import React from "react";
import styled from "styled-components";
import ArrowButton from "../../Common/ArrowButton/ArrowButton";

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
  & .reservation {
    width: 160px;
    height: 40px;
    background-color: var(--buttonColor);
    border: none;
    color: var(--fontColor);
    cursor: pointer;
  }
`;

interface PropsTypes {
  onclick: () => void;
  open: boolean;
}

function AvailableStudentItemHeading({ open, onclick }: PropsTypes) {
  return (
    <Container open={open}>
      <p>Name S.</p>
      <button className="reservation" type="button">
        Zarezerwuj rozmowę
      </button>
      <ArrowButton open={open} onclick={onclick} />
    </Container>
  );
}

export default AvailableStudentItemHeading;
