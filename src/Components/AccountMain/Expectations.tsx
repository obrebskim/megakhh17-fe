import React, { useContext } from "react";
import styled from "styled-components";
import ExpectationsTile from "./ExpectationsTile";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: var(--primaryDark);
`;

function Expectations() {
  const { state, dispatch } = useContext(UserAccountContext);
  return (
    <Container>
      <ExpectationsTile
        value={state.expectedTypeWork}
        type="select"
        onchange={dispatch}
        title="Preferowane miejsce pracy"
        actionName="SET_EXPECTED_TYPE_WORK"
      />
      <ExpectationsTile
        value={state.targetWorkCity}
        type="text"
        onchange={dispatch}
        title="Docelowe miasto, gdzie chce pracować kandydat"
        actionName="SET_TARGET_WORK_CITY"
      />
      <ExpectationsTile
        value={state.expectedContractType}
        type="select"
        onchange={dispatch}
        title="Oczekiwany typ kontraktu"
        actionName="SET_EXPECTED_CONTRACT_TYPE"
      />
      <ExpectationsTile
        value={state.expectedSalary}
        type="text"
        onchange={dispatch}
        title="Oczekiwane wynagrodzenie miesięczne netto"
        postfix="zł"
        actionName="SET_EXPECTED_SALARY"
      />
      <ExpectationsTile
        value={String(state.canTakeApprenticeship)}
        type="select"
        onchange={dispatch}
        title="Zgoda na bezpłatne praktyki/staż"
        actionName="SET_CAN_TAKE_APPRENTICESHIP"
      />
      <ExpectationsTile
        value={state.experience}
        type="text"
        onchange={dispatch}
        title="Komercyjne doświadczenie w programowaniu"
        postfix="miesięcy"
        actionName="SET_EXPERIENCE"
      />
    </Container>
  );
}

export default Expectations;
