import React from "react";
import styled from "styled-components";
import ArrowButton from "../../Common/ArrowButton/ArrowButton";
import Avatar from "../../Common/Avatar/Avatar";
import PlaceholderDiv from "../../Common/PlaceholderDiv/PlaceholderDiv";
import ReservationDate from "./ReservationDate";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";

type StyledProps = {
  open: boolean;
};

const Container = styled.div<StyledProps>`
  min-height: 70px;
  display: grid;
  grid-template-columns: 110px 200px auto 62px 140px 100px 30px;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  border: none;
  background-color: transparent;
  & .button {
    width: 100%;
    height: 40px;
    background-color: var(--buttonColor);
    border: none;
    font-size: 1.4rem;
    font-weight: normal;
    color: var(--fontColor);
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
      <ReservationDate />
      <Avatar name={`${student.firstName} ${student.lastName}`} />
      <PlaceholderDiv />
      <button type="button" className="button">
        Pokaż CV
      </button>
      <button type="button" className="button">
        Brak zainteresowania
      </button>
      <button type="button" className="button">
        Zatrudniony
      </button>
      <ArrowButton open={open} onclick={onclick} />
    </Container>
  );
}

export default AvailableStudentItemHeading;
