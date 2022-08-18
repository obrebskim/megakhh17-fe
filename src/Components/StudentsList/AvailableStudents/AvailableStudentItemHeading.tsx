import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ArrowButton from "../../Common/ArrowButton/ArrowButton";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";
import { selectUser } from "../../../State/Store/store";
import { open as modalOpen } from "../../../State/Slices/modalSlice";

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
  }
`;

interface PropsTypes {
  onclick: () => void;
  open: boolean;
  student: StudentsListItemInterface;
}

function AvailableStudentItemHeading({ open, onclick, student }: PropsTypes) {
  const { id } = useSelector(selectUser);
  const bookBookTheStudent = async () => {
    try {
      const resp = await fetch("http://localhost:3000/students-hrs", {
        method: "POST",
        body: JSON.stringify({ hrId: id, studentID: student.id }),
      });
      const data = await resp.json();
      modalOpen({
        isOpen: true,
        message: data.message,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container open={open}>
      <p>{`${student.firstName} ${student.lastName[0]}.`}</p>
      <button
        className="reservation"
        type="button"
        onClick={bookBookTheStudent}
      >
        Zarezerwuj rozmowę
      </button>
      <ArrowButton open={open} onclick={onclick} />
    </Container>
  );
}

export default AvailableStudentItemHeading;
