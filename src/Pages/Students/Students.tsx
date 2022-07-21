import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export default function Students() {
  return (
    <Container>
      <Header />
      <Link to="/students/talk-reservation">do Rozmowy</Link>
      <Link to="/students">Studenci</Link>
      <Outlet />
    </Container>
  );
}
