import React from "react";
import styled from "styled-components";
import GradeTile from "./GradeTile";

const Container = styled.div`
  height: 90px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: var(--primaryDark);
`;

function Grades() {
  return (
    <Container>
      <GradeTile title="Ocena przejścia kursu" grade="5" />
      <GradeTile title="Ocena aktywności i zaangażowania na kursie" grade="3" />
      <GradeTile title="Ocena kodu w projekcie własnym" grade="4" />
      <GradeTile title="Ocena pracy w zespole scrum" grade="5" />
    </Container>
  );
}

export default Grades;
