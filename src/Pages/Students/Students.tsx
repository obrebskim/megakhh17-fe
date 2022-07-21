import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section``;

export default function Students() {
  return (
    <Container>
      <p>Kursanci</p>
      <Link to="/students/talk-reservation">do Rozmowy</Link>
      <Link to="/students">Studenci</Link>
      <Outlet />
    </Container>
  );
}
