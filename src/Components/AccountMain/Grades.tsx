import React, { useContext } from "react";
import styled from "styled-components";
import GradeTile from "./GradeTile";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.div`
  height: 90px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: var(--primaryDark);
`;

function Grades() {
  const { state } = useContext(UserAccountContext);
  return (
    <Container>
      <GradeTile
        title="Ocena przejścia kursu"
        grade={String(state.courseCompletion)}
      />
      <GradeTile
        title="Ocena aktywności i zaangażowania na kursie"
        grade={String(state.courseEngagement)}
      />
      <GradeTile
        title="Ocena kodu w projekcie własnym"
        grade={String(state.projectDegree)}
      />
      <GradeTile
        title="Ocena pracy w zespole scrum"
        grade={String(state.teamProjectDegree)}
      />
    </Container>
  );
}

export default Grades;
