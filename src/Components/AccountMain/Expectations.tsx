import React, { useState } from "react";
import styled from "styled-components";
import ExpectationsTile from "./ExpectationsTile";

const Container = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: var(--primaryDark);
`;

function Expectations() {
  const [workType, setWorkType] = useState<string>("Biuro");
  const [city, setCity] = useState<string>("Gdańsk");
  const [contractType, setContractType] = useState<string>("Umowa o pracę");
  const [salary, setSalary] = useState<string>("8000");
  const [internAcceptation, setInterAcceptation] = useState<string>("NIE");
  const [exirienceInMonth, setExirienceInMonth] = useState<string>("6");
  return (
    <Container>
      <ExpectationsTile
        value={workType}
        type="select"
        onchange={setWorkType}
        title="Preferowane miejsce pracy"
      />
      <ExpectationsTile
        value={city}
        type="text"
        onchange={setCity}
        title="Docelowe miasto, gdzie chce pracować kandydat"
      />
      <ExpectationsTile
        value={contractType}
        type="select"
        onchange={setContractType}
        title="Oczekiwany typ kontraktu"
      />
      <ExpectationsTile
        value={salary}
        type="text"
        onchange={setSalary}
        title="Oczekiwane wynagrodzenie miesięczne netto"
        postfix="zł"
      />
      <ExpectationsTile
        value={internAcceptation}
        type="select"
        onchange={setInterAcceptation}
        title="Zgoda na bezpłatne praktyki/staż"
      />
      <ExpectationsTile
        value={exirienceInMonth}
        type="text"
        onchange={setExirienceInMonth}
        title="Komercyjne doświadczenie w programowaniu"
        postfix="miesięcy"
      />
    </Container>
  );
}

export default Expectations;
