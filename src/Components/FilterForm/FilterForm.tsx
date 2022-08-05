import React, { ChangeEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EvaluationBlock from "../Common/Evaluation/EvaluationBlock";
import WorkplacePreference from "../Common/Preference/WorkplacePreference";
import ContractPreference from "../Common/Preference/ContractPreference";
import FinancialPreference from "../Common/Preference/FinancialPreference";
import InternshipPreference from "../Common/Preference/InternshipPreference";
import Experience from "../Common/Preference/Experience";
import FilterFormContext from "../../utils/FilterFormContext";
import Button from "../Common/Preference/Button";

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
  const navigate = useNavigate();
  const [courseEvaluation, setCourseEvaluation] = useState<number>(0);
  const [activityEvaluation, setActivityEvaluation] = useState<number>(0);
  const [codeEvaluation, setCodeEvaluation] = useState<number>(0);
  const [teamEvaluation, setTeamEvaluation] = useState<number>(0);
  const [workplacePreference, setWorkplacePreference] = useState<number>(5);
  const [contractPreference, setContractPreference] = useState<number>(4);
  const [salaryMin, setSalaryMin] = useState<number | null>(null);
  const [salaryMax, setSalaryMax] = useState<number | null>(null);
  const [internshipPreference, setInternshipPreference] = useState<
    number | null
  >(null);
  const [experience, setExperience] = useState<number | null>(null);
  const handleSetSalaryMin = (e: ChangeEvent<HTMLInputElement>) => {
    setSalaryMin(Number(e.target.value));
  };
  const handleSetSalaryMax = (e: ChangeEvent<HTMLInputElement>) => {
    setSalaryMax(Number(e.target.value));
  };
  const handleSetInternshipPreference = (e: ChangeEvent<HTMLInputElement>) => {
    setInternshipPreference(Number(e.target.value));
  };
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience(Number(e.target.value));
  };
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmitForm = () => {};
  const clearAll = () => {
    setCourseEvaluation(0);
    setActivityEvaluation(0);
    setCodeEvaluation(0);
    setTeamEvaluation(0);
    setWorkplacePreference(5);
    setContractPreference(4);
    setSalaryMin(null);
    setSalaryMax(null);
    setExperience(null);
    setInternshipPreference(null);
  };

  console.log(
    courseEvaluation,
    activityEvaluation,
    codeEvaluation,
    teamEvaluation,
    workplacePreference,
    contractPreference,
    salaryMin,
    salaryMax,
    internshipPreference,
    experience,
  );

  return (
    <Container>
      <Header>
        <span className="title">Filtrowanie</span>
        <button className="clear-all" type="button" onClick={clearAll}>
          Wyczyść wszystkie
        </button>
      </Header>
      <FilterFormContext.Provider
        value={useMemo(
          () => ({
            courseEvaluation,
            activityEvaluation,
            codeEvaluation,
            teamEvaluation,
            workplacePreference,
            contractPreference,
            salaryMin,
            salaryMax,
            internshipPreference,
            experience,
            setCourseEvaluation,
            setActivityEvaluation,
            setCodeEvaluation,
            setTeamEvaluation,
            setWorkplacePreference,
            setContractPreference,
            handleSetSalaryMin,
            handleSetSalaryMax,
            handleSetInternshipPreference,
            handleExperience,
          }),
          [
            courseEvaluation,
            activityEvaluation,
            codeEvaluation,
            teamEvaluation,
            workplacePreference,
            contractPreference,
            salaryMin,
            salaryMax,
            internshipPreference,
            experience,
          ],
        )}
      >
        <Form onSubmit={handleSubmitForm}>
          <EvaluationBlock
            text="Ocena przejścia kursu"
            row={1}
            handleClick={setCourseEvaluation}
          />
          <EvaluationBlock
            text="Ocena aktywności i zaangażowania na kursie"
            row={2}
            handleClick={setActivityEvaluation}
          />
          <EvaluationBlock
            text="Ocena kodu w projekcie własnym"
            row={3}
            handleClick={setCodeEvaluation}
          />
          <EvaluationBlock
            text="Ocena pracy w zespole Scrum"
            row={4}
            handleClick={setTeamEvaluation}
          />
          <WorkplacePreference text="Preferowane miejsce pracy" />
          <ContractPreference text="Oczekiwany typ kontraktu" />
          <FinancialPreference text="Oczekiwane wynagrodzenie miesięczne netto" />
          <InternshipPreference text="Zgodan na odbycie bezpłatnych praktyk/stażu na początek" />
          <Experience text="Ilość miesięcy doświadczenia komercyjnego w programowaniu" />
          <Button
            text="Anuluj"
            color="#0a0a0a"
            className="cancel-btn"
            handleClick={handleCancel}
          />
          <Button
            text="Pokaż wyniki"
            color="#E02735"
            className="submit-btn"
            handleClick={() => console.log("submit")}
          />
        </Form>
      </FilterFormContext.Provider>
    </Container>
  );
}
