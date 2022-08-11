import React, { useContext } from "react";
import styled from "styled-components";
import RegisterExpectationsTile from "./RegisterExpectationsTile";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: var(--primaryDark);
`;

function RegisterExpectations() {
  const { state, dispatch } = useContext(UserAccountContext);
  return (
    <Container>
      <RegisterExpectationsTile
        value={state.expectedTypeWork}
        type="select"
        onchange={dispatch}
        title="Preferowane miejsce pracy"
        actionName="SET_EXPECTED_TYPE_WORK"
      />
      <RegisterExpectationsTile
        value={state.targetWorkCity}
        type="text"
        onchange={dispatch}
        title="Docelowe miasto, gdzie chce pracować kandydat"
        actionName="SET_TARGET_WORK_CITY"
      />
      <RegisterExpectationsTile
        value={state.expectedContractType}
        type="select"
        onchange={dispatch}
        title="Oczekiwany typ kontraktu"
        actionName="SET_EXPECTED_CONTRACT_TYPE"
      />
      <RegisterExpectationsTile
        value={state.expectedSalary}
        type="text"
        onchange={dispatch}
        title="Oczekiwane wynagrodzenie miesięczne netto"
        postfix="zł"
        actionName="SET_EXPECTED_SALARY"
      />
      <RegisterExpectationsTile
        value={String(state.canTakeApprenticeship)}
        type="select"
        onchange={dispatch}
        title="Zgoda na bezpłatne praktyki/staż"
        actionName="SET_INTERNSHIP"
      />
      <RegisterExpectationsTile
        value={String(state.experienceMonths)}
        type="text"
        onchange={dispatch}
        title="Komercyjne doświadczenie w programowaniu"
        postfix="miesięcy"
        actionName="SET_EXPERIENCE_MONTHS"
      />
    </Container>
  );
}

export default RegisterExpectations;
