import React from "react";
import styled from "styled-components";
import ArrowButton from "../../Common/ArrowButton/ArrowButton";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";

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
  student: StudentsListItemInterface;
}

function AvailableStudentItemHeading({ open, onclick, student }: PropsTypes) {
  return (
    <Container open={open}>
      <p>{`${student.firstName} ${student.lastName[0]}.`}</p>
      <button className="reservation" type="button">
        Zarezerwuj rozmowę
      </button>
      <ArrowButton open={open} onclick={onclick} />
    </Container>
  );
}

export default AvailableStudentItemHeading;
