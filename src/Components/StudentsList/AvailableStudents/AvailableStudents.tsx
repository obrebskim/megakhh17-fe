import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import AvailableStudentItem from "./AvailableStudentItem";
import fetchData from "../../../utils/fetchData";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";

const Container = styled.section``;

function AvailableStudents() {
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
          <AvailableStudentItem key={s.id} student={s} />
        ))}
      </StudentsList>
    </Container>
  );
}

export default AvailableStudents;
