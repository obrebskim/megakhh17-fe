import React, { useState } from "react";
import styled from "styled-components";
import StudentItemDetail from "../StudentItemDetail";
import ReservationStudentItemHeading from "./ReservationStudentItemHeading";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";

const Container = styled.li`
  background-color: var(--secondaryDark);
`;

interface PropsTypes {
  student: StudentsListItemInterface;
}

function AvailableStudentItem({ student }: PropsTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpenchange = (): void => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <ReservationStudentItemHeading
        onclick={handleIsOpenchange}
        open={isOpen}
        student={student}
      />
      {isOpen && <StudentItemDetail student={student} />}
    </Container>
  );
}

export default AvailableStudentItem;
