import React, { useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import StudentsNav from "../../Components/StudentsNav/StudentsNav";
import StudentsSearchAndFilter from "../../Components/StudentsSearchAndFilter/StudentsSearchAndFilter";
import { selectUser } from "../../State/Store/store";
import Pagination from "../../Components/Common/Pagination/Pagination";

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 1430px;
  margin: 30px auto;
`;

const ListWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  background-color: var(--secondaryDark);
  padding-bottom: 20px;
`;

interface ContextTypes {
  pageNo: number;
  perPageNo: number;
  setAllPages: React.Dispatch<number>;
}

export default function Students() {
  const user = useSelector(selectUser);
  const [pageNo, setPageNo] = useState<number>(1);
  const [allPages, setAllPages] = useState<number>(1);
  const [perPageNo, setPerPageNo] = useState<number>(10);

  if (user.role !== 2) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <StudentsNav />
        <ListWrapper>
          <StudentsSearchAndFilter />
          <Outlet context={{ pageNo, perPageNo, setAllPages }} />
        </ListWrapper>
        <Pagination
          pageNo={pageNo}
          allPages={allPages}
          changePage={setPageNo}
          changePerPage={setPerPageNo}
        />
      </Wrapper>
    </Container>
  );
}

export function usePagination() {
  return useOutletContext<ContextTypes>();
}
