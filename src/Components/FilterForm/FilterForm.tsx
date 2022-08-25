import React, { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import EvaluationBlock from "../Common/Evaluation/EvaluationBlock";
import WorkplacePreference from "../Common/Preference/WorkplacePreference";
import ContractPreference from "../Common/Preference/ContractPreference";
import FinancialPreference from "../Common/Preference/FinancialPreference";
import InternshipPreference from "../Common/Preference/InternshipPreference";
import Experience from "../Common/Preference/Experience";
import Button from "../Common/Button/Button";
import PreferenceButton from "../Common/Preference/PreferenceButton";
import { FilterFormContext } from "../../Context/FilterFormContext";

interface PropsTypes {
  searchString: string;
  visibility: string;
  handleVisibility: (value: string) => void;
}

interface StyledPropsTypes {
  visibility: string;
}

const Container = styled.div<StyledPropsTypes>`
  position: absolute;
  z-index: 1;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 520px;
  height: 806px;
  background-color: var(--filterBackground);
  visibility: ${(props) => props.visibility};

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

export default function FilterForm({
  searchString,
  visibility,
  handleVisibility,
}: PropsTypes) {
  const { state, dispatch } = useContext(FilterFormContext);
  const [filterUrl, setFilterUrl] = useState<string>("");
  const clearAll = () => {
    dispatch({ type: "SET_COURSE_EVALUATION", payload: "0" });
    dispatch({ type: "SET_ACTIVITY_EVALUATION", payload: "0" });
    dispatch({ type: "SET_CODE_EVALUATION", payload: "0" });
    dispatch({ type: "SET_TEAM_EVALUATION", payload: "0" });
    dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "5" });
    dispatch({ type: "SET_CONTRACT_PREFERENCE", payload: "4" });
    dispatch({ type: "SET_SALARY_MIN", payload: 0 });
    dispatch({ type: "SET_SALARY_MAX", payload: 0 });
    dispatch({ type: "SET_INTERNSHIP_PREFERENCE", payload: 0 });
    dispatch({ type: "SET_EXPERIENCE", payload: 0 });
  };
  const handleCancel = () => {
    handleVisibility("hidden");
  };
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setFilterUrl(
      `http://localhost/3000/students/filter/1/5/${searchString}/${state.courseEvaluation}/${state.activityEvaluation}/${state.codeEvaluation}/${state.teamEvaluation}/${state.workplacePreference}/${state.contractPreference}/${state.salaryMin}/${state.salaryMax}/${state.internshipPreference}/${state.experience}`,
    );
    handleVisibility("hidden");
  };
  if (filterUrl.length > 0) console.log(filterUrl);
  return (
    <Container visibility={visibility}>
      <Header>
        <span className="title">Filtrowanie</span>
        <button className="clear-all" type="button" onClick={clearAll}>
          Wyczyść wszystkie
        </button>
      </Header>
      <Form onSubmit={handleSubmitForm}>
        <EvaluationBlock
          text="Ocena przejścia kursu"
          row="1"
          handleClick={(level) =>
            dispatch({ type: "SET_COURSE_EVALUATION", payload: level })
          }
        />
        <EvaluationBlock
          text="Ocena aktywności i zaangażowania na kursie"
          row="2"
          handleClick={(level) =>
            dispatch({ type: "SET_ACTIVITY_EVALUATION", payload: level })
          }
        />
        <EvaluationBlock
          text="Ocena kodu w projekcie własnym"
          row="3"
          handleClick={(level) =>
            dispatch({ type: "SET_CODE_EVALUATION", payload: level })
          }
        />
        <EvaluationBlock
          text="Ocena pracy w zespole Scrum"
          row="4"
          handleClick={(level) =>
            dispatch({ type: "SET_TEAM_EVALUATION", payload: level })
          }
        />
        <WorkplacePreference text="Preferowane miejsce pracy" />
        <ContractPreference text="Oczekiwany typ kontraktu" />
        <FinancialPreference text="Oczekiwane wynagrodzenie miesięczne netto (pln)" />
        <InternshipPreference text="Zgodan na odbycie bezpłatnych praktyk/stażu na początek" />
        <Experience text="Ilość miesięcy doświadczenia komercyjnego w programowaniu" />
        <PreferenceButton
          text="Anuluj"
          color="#0a0a0a"
          className="cancel-btn"
          handleClick={handleCancel}
        />
        <Button text="Pokaż wyniki" color="#E02735" className="submit-btn" />
      </Form>
    </Container>
  );
}
