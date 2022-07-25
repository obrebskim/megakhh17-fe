import React, { useState } from "react";
import styled from "styled-components";
import StudentItemDetail from "../StudentItemDetail";
import ReservationStudentItemHeading from "./ReservationStudentItemHeading";

const Container = styled.li`
  background-color: var(--secondaryDark);
`;

function AvailableStudentItem() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpenchange = (): void => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <ReservationStudentItemHeading
        onclick={handleIsOpenchange}
        open={isOpen}
      />
      {isOpen && <StudentItemDetail />}
    </Container>
  );
}

export default AvailableStudentItem;
