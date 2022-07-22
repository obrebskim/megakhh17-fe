import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";

const Container = styled.section`
  height: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &::after {
    content: "";
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--primaryDark);
  }
`;

function StudentsSearchAndFilter() {
  return (
    <Container>
      <label htmlFor="search">
        <input type="text" name="search" />
      </label>
      <FilterButton onclick={() => {}} />
    </Container>
  );
}

export default StudentsSearchAndFilter;
