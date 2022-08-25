import React from "react";
import styled from "styled-components";
import DetailItem from "./DetailItem";
import { StudentsListItemInterface } from "../../Types/StudentsListItemInterface";
import setMonthNumeral from "../../utils/setMonthNumeral";

const Container = styled.div`
  height: 110px;
  display: grid;
  grid-template-columns: repeat(10, auto);
  gap: 4px;
  background-color: var(--secondaryDark);
`;

interface PropsTypes {
  student: StudentsListItemInterface;
}

function StudentItemDetail({ student }: PropsTypes) {
  return (
    <Container>
      <DetailItem
        title="Ocena przejścia kursu"
        content={`${student.courseCompletion}/5`}
      />
      <DetailItem
        title="Ocena aktywności i zaangażowania na kursie"
        content={`${student.courseCompletion}/5`}
      />
      <DetailItem
        title="Ocena kodu w projekcie własnym"
        content={`${student.courseCompletion}/5`}
      />
      <DetailItem
        title="Ocena pracy w zespole w Scrum"
        content={`${student.courseCompletion}/5`}
      />
      <DetailItem
        title="Preferowane miejsce pracy"
        content={`${student.courseCompletion}/5`}
      />
      <DetailItem
        title="Docelowe Miasto gdzie chce pracować kandydat"
        content={student.targetWorkCity}
      />
      <DetailItem
        title="Oczekiwany typ kontraktu"
        content={student.typeContract}
      />
      <DetailItem
        title="Oczekiwane wynagrodzenie miesięczne netto"
        content={`${student.expectedSalary} zł`}
      />
      <DetailItem
        title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
        content={student.canTakeApprenticeship}
      />
      <DetailItem
        title="Komercyjne doświadczenie w programowaniu"
        content={`${student.monthsOfCommercialExp} ${setMonthNumeral(
          student.monthsOfCommercialExp,
        )}`}
      />
    </Container>
  );
}

export default StudentItemDetail;
