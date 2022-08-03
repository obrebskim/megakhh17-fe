import React from "react";
import styled from "styled-components";
import Bio from "../../Components/Bio/Bio";
import Header from "../../Components/Header/Header";

const Container = styled.section`
  width: auto;
  height: auto;
  display: grid;
`;

export default function CuriculumVitae() {
  return (
    <Container>
      <Header />
      <Bio />
    </Container>
  );
}
