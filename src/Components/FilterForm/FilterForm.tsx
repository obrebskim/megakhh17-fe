import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import EvaluationBlock from "../Common/Evaluation/EvaluationBlock";
import WorkplacePreference from "../Common/Preference/WorkplacePreference";
import ContactPreference from "../Common/Preference/ContactPreference";
import FinancialPreference from "../Common/Preference/FinancialPreference";
import InternshipPreference from "../Common/Preference/InternshipPreference";
import Experience from "../Common/Preference/Experience";
import PreferenceButton from "../Common/Preference/PreferenceButton";
// import EvaluationType from "../../types/EvaluationType";
// import formDefaultData from "../../utils/formDefaultData";
import FilterFormContext from "../../utils/FilterFormContext";

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
  const [workplacePreferenceRemote, setWorkplacePreferenceRemote] =
    useState<boolean>(false); // zostawić jeden stan z wartościami liczbowymi np. 1 i 2 // opcja: dodać praca hybrydowa
  const [workplacePreferenceOffice, setWorkplacePreferenceOffice] =
    useState<boolean>(false); // usunąć
  const [contractPreferencePermanent, setContractPreferencePermanent] =
    useState<boolean>(false);
  const [contractPreferenceB2B, setContractPreferenceB2B] =
    useState<boolean>(false);
  const [contractPreferenceMandate, setContractPreferenceMandate] =
    useState<boolean>(false);
  const [contractPreferenceContract, setContractPreferenceContract] =
    useState<boolean>(false);
  const [salaryMin, setSalaryMin] = useState<number | null>(null);
  const [salaryMax, setSalaryMax] = useState<number | null>(null);
  const [internshipPreference, setInternshipPreference] = useState<
    string | null
  >(null);
  const [experience, setExperience] = useState<number | null>(null);
  // const [formData, setFormData] = useState<EvaluationType>(formDefaultData);
  const handleSetSalaryMin = (e: ChangeEvent<HTMLInputElement>) => {
    setSalaryMin(Number(e.target.value));
  };
  const handleSetSalaryMax = (e: ChangeEvent<HTMLInputElement>) => {
    setSalaryMax(Number(e.target.value));
  };
  const handleSetInternshipPreference = (e: ChangeEvent<HTMLInputElement>) => {
    setInternshipPreference(e.target.value);
  };
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience(Number(e.target.value));
  };
  const handle = () => {};
  const handleSubmitForm = () => {};
  const clearAll = () => {
    setCourseEvaluation(0);
    setActivityEvaluation(0);
    setCodeEvaluation(0);
    setTeamEvaluation(0);
    setWorkplacePreferenceRemote(false);
    setWorkplacePreferenceOffice(false);
    setContractPreferencePermanent(false);
    setContractPreferenceB2B(false);
    setContractPreferenceMandate(false);
    setContractPreferenceContract(false);
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
    workplacePreferenceRemote,
    workplacePreferenceOffice,
    contractPreferencePermanent,
    contractPreferenceB2B,
    contractPreferenceMandate,
    contractPreferenceContract,
    salaryMin,
    salaryMax,
    experience,
    internshipPreference,
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
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          courseEvaluation,
          activityEvaluation,
          codeEvaluation,
          teamEvaluation,
          workplacePreferenceRemote,
          workplacePreferenceOffice,
          contractPreferencePermanent,
          contractPreferenceB2B,
          contractPreferenceMandate,
          contractPreferenceContract,
          salaryMin,
          salaryMax,
          internshipPreference,
          experience,
          setCourseEvaluation,
          setActivityEvaluation,
          setCodeEvaluation,
          setTeamEvaluation,
          setWorkplacePreferenceRemote,
          setWorkplacePreferenceOffice,
          setContractPreferencePermanent,
          setContractPreferenceB2B,
          setContractPreferenceMandate,
          setContractPreferenceContract,
          handleSetSalaryMin,
          handleSetSalaryMax,
          handleSetInternshipPreference,
          handleExperience,
        }}
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
          <ContactPreference text="Oczekiwany typ kontaktu" />
          <FinancialPreference text="Oczekiwane wynagrodzenie miesięczne netto" />
          <InternshipPreference text="Zgodan na odbycie bezpłatnych praktyk/stażu na początek" />
          <Experience text="Ilość miesięcy doświadczenia komercyjnego w programowaniu" />
          <PreferenceButton
            text="Anuluj"
            color="#0a0a0a"
            className="cancel-btn"
            handleClick={handle}
          />
          <PreferenceButton
            text="Pokaż wyniki"
            color="#E02735"
            className="submit-btn"
            handleClick={handle}
          />
        </Form>
      </FilterFormContext.Provider>
    </Container>
  );
}
