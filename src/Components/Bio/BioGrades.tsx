import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

const Wrapper = styled.div`
  display: grid;
  height: 110px;
  grid-template-columns: repeat(10, auto);
  justify-content: flex-start;
  background-color: var(--primaryDark);
`;

const Container = styled.div`
  margin: 30px;
  display: table-row;
  background-color: var(--primaryDark);
`;

export default function BioGrades() {
  return (
    <>
      <h3>Oceny</h3>
      <Wrapper>
        <Container>
          <p>Ocena przejścia kursu</p>
          <Stars grade={5} />
        </Container>
        <Container>
          <p>Ocena aktywności i zaangażowania na kursie</p>
          <Stars grade={4} />
        </Container>
        <Container>
          <p>Ocena kodu w projekcie własnym</p>
          <Stars grade={2} />
        </Container>
        <Container>
          <p>Ocena pracy w zespole w Scrum</p>
          <Stars grade={0} />
        </Container>
      </Wrapper>
    </>
  );
}
