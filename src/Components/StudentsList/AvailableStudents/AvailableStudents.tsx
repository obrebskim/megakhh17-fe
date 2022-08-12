import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentsList from "../StudentsList";
import AvailableStudentItem from "./AvailableStudentItem";
import fetchData from "../../../utils/fetchData";
import { StudentsListItemInterface } from "../../../Types/StudentsListItemInterface";
import Pagination from "../../Common/Pagination/Pagination";

const Container = styled.section``;

function AvailableStudents() {
  const [students, setStudents] = useState<StudentsListItemInterface[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [allPages, setAllPages] = useState<number>(1);
  const [perPageNo, setPerPageNo] = useState<number>(10);
  useEffect(() => {
    (async () => {
      const { allStudents, totalPages } = await fetchData(
        `http://localhost:3000/students/all/${pageNo}/${perPageNo}`,
      );
      setStudents(allStudents);
      setAllPages(totalPages);
    })();
  }, [pageNo, perPageNo]);
  return (
    <Container>
      {students.length > 0 ? (
        <StudentsList>
          {students.map((s) => (
            <AvailableStudentItem key={s.id} student={s} />
          ))}
        </StudentsList>
      ) : (
        <p>Wczytuję</p>
      )}
      <Pagination
        pageNo={pageNo}
        allPages={allPages}
        changePage={setPageNo}
        changePerPage={setPerPageNo}
      />
    </Container>
  );
}

export default AvailableStudents;
