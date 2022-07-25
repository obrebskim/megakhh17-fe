import React from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import ReservationStudentItem from "./ReservationStudentItem";

const Container = styled.section``;

export default function TalkReservation() {
  return (
    <Container>
      <StudentsList>
        <ReservationStudentItem />
        <ReservationStudentItem />
      </StudentsList>
    </Container>
  );
}
