import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import StudentsNav from "../../Components/StudentsNav/StudentsNav";
import StudentsSearchAndFilter from "../../Components/StudentsSearchAndFilter/StudentsSearchAndFilter";
import { selectUser } from "../../State/Store/store";

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

export default function Students() {
  const user = useSelector(selectUser);

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
          <Outlet />
        </ListWrapper>
      </Wrapper>
    </Container>
  );
}
