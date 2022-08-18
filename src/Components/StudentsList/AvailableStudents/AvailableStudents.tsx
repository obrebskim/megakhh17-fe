import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import AvailableStudentItem from "./AvailableStudentItem";
import fetchData from "../../../utils/fetchData";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";
import { usePagination } from "../../../Pages/Students/Students";

const Container = styled.section``;

function AvailableStudents() {
  const { pageNo, setAllPages, perPageNo } = usePagination();
  const [students, setStudents] = useState<StudentsListItemInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { allStudents, totalPages } = await fetchData(
        `http://localhost:3000/students/all/${pageNo}/${perPageNo}`,
      );
      setStudents(allStudents);
      setAllPages(totalPages);
      setLoading(false);
    })();
  }, [pageNo, perPageNo, setAllPages]);
  return (
    <Container>
      {!loading ? (
        <StudentsList>
          {students.map((s) => (
            <AvailableStudentItem key={s.id} student={s} />
          ))}
        </StudentsList>
      ) : (
        <p>Wczytuję</p>
      )}
    </Container>
  );
}

export default AvailableStudents;
