import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import ReservationStudentItem from "./ReservationStudentItem";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";
import fetchData from "../../../utils/fetchData";
import { usePagination } from "../../../Pages/Students/Students";
import LoadingSpinner from "../../Common/LoadingSpinner/LoadingSpinner";

const Container = styled.section``;

export default function TalkReservation() {
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
      setStudents(allStudents);
    })();
  }, [pageNo, perPageNo, setAllPages]);
  return (
    <Container>
      {!loading ? (
        <StudentsList>
          {students.map((s) => (
            <ReservationStudentItem key={s.id} student={s} />
          ))}
        </StudentsList>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}
