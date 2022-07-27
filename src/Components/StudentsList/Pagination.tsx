import React, { useEffect, useState } from "react";

function Pagination() {
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    //  (fetch from BE (get students page - pageNo?) and setStudents)()
  }, [page]);

  // const content = students.map() over the student's data - AvailableStudentItem ? ;

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <>
      Ilosc elementow
      <nav>10</nav>
      10 z 90
      <nav>
        <button onClick={prevPage} disabled={page === 1}>
          &lt;
        </button>
        <button onClick={nextPage} disabled={!students.length}>
          &gt;
        </button>
      </nav>
      {/*{content}*/}
    </>
  );
}

export default Pagination;
