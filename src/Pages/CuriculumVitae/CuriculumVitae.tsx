import React from "react";
import styled from "styled-components";
import Bio from "../../Components/Bio/Bio";
import Header from "../../Components/Header/Header";

const Container = styled.section`
  display: grid;
  background-color: var(--primaryDark);
`;

export default function CuriculumVitae() {
  return (
    <Container>
      <Header />
      <Bio />
    </Container>
  );
}
