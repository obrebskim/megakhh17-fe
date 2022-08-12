import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import ReservationStudentItem from "./ReservationStudentItem";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";
import fetchData from "../../../utils/fetchData";

const Container = styled.section``;

export default function TalkReservation() {
  const [students, setStudents] = useState<StudentsListItemInterface[]>([]);
  useEffect(() => {
    console.log("pobieram studentów");
    (async () => {
      const { allStudents } = await fetchData(
        "http://localhost:3000/students/all/1/10",
      );
      setStudents(allStudents);
    })();
  }, []);
  return (
    <Container>
      <StudentsList>
        {students.map((s) => (
          <ReservationStudentItem key={s.id} student={s} />
        ))}
      </StudentsList>
    </Container>
  );
}
