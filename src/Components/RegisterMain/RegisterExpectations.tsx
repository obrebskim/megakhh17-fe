import React, { useContext } from "react";
import styled from "styled-components";
import RegisterExpectationsTile from "./RegisterExpectationsTile";
import { UserRegisterContext } from "../../Context/UserRegisterContext";

const Container = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: var(--primaryDark);
`;

function RegisterExpectations() {
  const { state, dispatch } = useContext(UserRegisterContext);
  const internshipOptions = [
    { value: 0, label: "NIE" },
    { value: 1, label: "TAK" },
  ];
  const expectedTypeWorkOptions = [
    { value: 5, label: "Brak Preferencji" },
    { value: 1, label: "Praca w biurze" },
    { value: 2, label: "Gotowość do relokacji" },
    { value: 3, label: "Praca zdalna" },
    { value: 4, label: "Praca hybrydowa" },
  ];
  const expectedContractTypeOptions = [
    { value: 4, label: "Brak Preferencji" },
    { value: 1, label: "Umowa o pracę" },
    { value: 2, label: "B2B" },
    { value: 3, label: "Umowa o dzieło / zlecenie" },
  ];
  return (
    <Container>
      <RegisterExpectationsTile
        value={state.expectedTypeWorkID}
        type="select"
        onchange={dispatch}
        title="Preferowane miejsce pracy"
        actionName="SET_EXPECTED_TYPE_WORK"
        options={expectedTypeWorkOptions}
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
        options={expectedContractTypeOptions}
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
        options={internshipOptions}
      />
      <RegisterExpectationsTile
        value={String(state.monthsOfCommercialExp)}
        type="text"
        onchange={dispatch}
        title="Komercyjne doświadczenie w programowaniu"
        postfix="miesięcy"
        actionName="SET_MONTHS_OF_COMMERCIAL_EXP"
      />
    </Container>
  );
}

export default RegisterExpectations;
