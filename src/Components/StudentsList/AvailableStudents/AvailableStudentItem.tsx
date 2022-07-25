import React, { useState } from "react";
import styled from "styled-components";
import AvailableStudentItemHeading from "./AvailableStudentItemHeading";
import StudentItemDetail from "../StudentItemDetail";

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
      <AvailableStudentItemHeading open={isOpen} onclick={handleIsOpenchange} />
      {isOpen && <StudentItemDetail />}
    </Container>
  );
}

export default AvailableStudentItem;
