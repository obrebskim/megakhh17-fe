import React from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import AvailableStudentItem from "./AvailableStudentItem";

const Container = styled.section``;

function AvailableStudents() {
  return (
    <Container>
      <StudentsList>
        <AvailableStudentItem />
        <AvailableStudentItem />
      </StudentsList>
    </Container>
  );
}

export default AvailableStudents;
