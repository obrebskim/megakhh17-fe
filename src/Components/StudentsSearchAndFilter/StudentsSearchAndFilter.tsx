import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import SearchInput from "./SearchInput";

const Container = styled.section`
  height: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: "";
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--primaryDark);
  }
`;

function StudentsSearchAndFilter() {
  const [searchString, setSearchString] = useState<string>("");
  return (
    <Container>
      <SearchInput value={searchString} onchange={setSearchString} />
      <FilterButton onclick={() => {}} />
    </Container>
  );
}

export default StudentsSearchAndFilter;
