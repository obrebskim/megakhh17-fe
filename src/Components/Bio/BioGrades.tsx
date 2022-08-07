import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

const Wrapper = styled.div`
  display: grid;
  height: 110px;
  grid-template-columns: repeat(10, auto);
`;

const Container = styled.div`
  margin: 30px;
  display: table-row;
`;

const Title = styled.h3`
  height: 60px;
  text-align: left;
  padding: 15px;
  background-color: var(--secondaryDark);
`;

export default function BioGrades() {
  return (
    <>
      <Title>Oceny</Title>
      <Wrapper>
        <Container>
          <Stars name="Ocena przejścia kursu" grade={5} />
        </Container>
        <Container>
          <Stars name="Ocena aktywności i zaangażowania na kursie" grade={4} />
        </Container>
        <Container>
          <Stars name="Ocena kodu w projekcie własnym" grade={2} />
        </Container>
        <Container>
          <Stars name="Ocena pracy w zespole w Scrum" grade={0} />
        </Container>
      </Wrapper>
    </>
  );
}
