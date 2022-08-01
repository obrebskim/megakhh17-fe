import React, { useState } from "react";
import styled from "styled-components";
import EvaluationBlock from "../Common/Evaluation/EvaluationBlock";
import WorkplacePreference from "../Common/Preference/WorkplacePreference";
import ContactPreference from "../Common/Preference/ContactPreference";
import FinancialPreference from "../Common/Preference/FinancialPreference";
import InternshipPreference from "../Common/Preference/InternshipPreference";
import Experience from "../Common/Preference/Experience";
import PreferenceButton from "../Common/Preference/PreferenceButton";

const Container = styled.div`
  position: absolute;
  top: 137px;
  left: 50%;
  transform: translateX(-50%);
  width: 520px;
  height: 806px;
  background-color: var(--filterBackground);

  & .title {
    display: block;
    width: 107px;
    margin: 21px 0 11px 18px;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
  }

  & .clear-all {
    position: absolute;
    top: 24px;
    right: 22px;
    width: 130px;
    height: 31px;
    padding: 4px 10px;
    font-size: 14px;
    cursor: pointer;
    background-color: #172a35;
    color: #f7f7f7;
    border: none;
  }

  & .cancel-btn {
    position: absolute;
    bottom: 19px;
    left: 312px;
    font-size: 16px;
    padding: 6px 10px;
  }

  & .submit-btn {
    position: absolute;
    bottom: 19px;
    right: 22px;
    font-size: 16px;
    padding: 6px 10px;
    margin-left: 20px;
  }
`;

const Header = styled.header``;

const Form = styled.form``;

export default function FilterForm() {
  const [courseEvaluation, setCourseEvaluation] = useState<number>(0);
  const [activityEvaluation, setActivityEvaluation] = useState<number>(0);
  const [codeEvaluation, setCodeEvaluation] = useState<number>(0);
  const [teamEvaluation, setTeamEvaluation] = useState<number>(0);
  const handleSetCourseEvaluation = (value: number) => {
    setCourseEvaluation(value);
  };
  const handleSetActivityEvaluation = (value: number) => {
    setActivityEvaluation(value);
  };
  const handleSetCodeEvaluation = (value: number) => {
    setCodeEvaluation(value);
  };
  const handleSetTeamEvaluation = (value: number) => {
    setTeamEvaluation(value);
  };
  const handleInputChange = () => {};

  console.log(
    courseEvaluation,
    activityEvaluation,
    codeEvaluation,
    teamEvaluation,
  );

  return (
    <Container>
      <Header>
        <span className="title">Filtrowanie</span>
        <button className="clear-all" type="button">
          Wyczyść wszystkie
        </button>
      </Header>
      <Form>
        <EvaluationBlock
          text="Ocena przejścia kursu"
          row={1}
          course={courseEvaluation}
          activity={activityEvaluation}
          code={codeEvaluation}
          team={teamEvaluation}
          handleClick={handleSetCourseEvaluation}
        />
        <EvaluationBlock
          text="Ocena aktywności i zaangażowania na kursie"
          row={2}
          course={courseEvaluation}
          activity={activityEvaluation}
          code={codeEvaluation}
          team={teamEvaluation}
          handleClick={handleSetActivityEvaluation}
        />
        <EvaluationBlock
          text="Ocena kodu w projekcie własnym"
          row={3}
          course={courseEvaluation}
          activity={activityEvaluation}
          code={codeEvaluation}
          team={teamEvaluation}
          handleClick={handleSetCodeEvaluation}
        />
        <EvaluationBlock
          text="Ocena pracy w zespole Scrum"
          row={4}
          course={courseEvaluation}
          activity={activityEvaluation}
          code={codeEvaluation}
          team={teamEvaluation}
          handleClick={handleSetTeamEvaluation}
        />
        <WorkplacePreference text="Preferowane miejsce pracy" />
        <ContactPreference text="Oczekiwany typ kontaktu" />
        <FinancialPreference
          text="Oczekiwane wynagrodzenie miesięczne netto"
          onChange={handleInputChange}
        />
        <InternshipPreference
          text="Zgodan na odbycie bezpłatnych praktyk/stażu na początek"
          onChange={handleInputChange}
        />
        <Experience
          text="Ilość miesięcy doświadczenia komercyjnego w programowaniu"
          onChange={handleInputChange}
        />
        <PreferenceButton
          text="Anuluj"
          color="#0a0a0a"
          className="cancel-btn"
        />
        <PreferenceButton
          text="Pokaż wyniki"
          color="#E02735"
          className="submit-btn"
        />
      </Form>
    </Container>
  );
}
