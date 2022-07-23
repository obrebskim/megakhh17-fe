import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.nav`
  height: 72px;
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  background-color: var(--secondaryDark);
  & a {
    position: relative;
    height: 100%;
    display: grid;
    place-items: center;
    padding: 0 20px;
    text-decoration: none;
    font-size: 1.8rem;
    color: var(--secondaryFontColor);
    &.active {
      color: var(--fontColor);
      &::after {
        content: "";
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--buttonColor);
        font-weight: 700;
      }
    }
  }
`;

export default function StudentsNav() {
  return (
    <Container>
      <NavLink to="/students/list">Dostępni kursanci</NavLink>
      <NavLink to="/students/talk-reservation">Do rozmowy</NavLink>
    </Container>
  );
}
