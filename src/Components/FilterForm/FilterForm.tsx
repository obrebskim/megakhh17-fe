import React from "react";
import styled from "styled-components";
/* import Button from "../Common/Button/Button"; */
import EvaluationBlock from "../Common/Evaluation/EvaluationBlock";
import WorkplacePreference from "../Common/Preference/WorkplacePreference";
import ContactPreference from "../Common/Preference/ContactPreference";

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
`;

const Header = styled.header``;

const Form = styled.form``;

export default function FilterForm() {
  //  const [courseCompletionEvaluation, setCourseCompletionEvaluation] = useState<number>(0);

  return (
    <Container>
      <Header>
        <span className="title">Filtrowanie</span>
        <button className="clear-all" type="button">
          Wyczyść wszystkie
        </button>
      </Header>
      <Form>
        <EvaluationBlock text="Ocena przejścia kursu" />
        <EvaluationBlock text="Ocena aktywności i zaangażowania na kursie" />
        <EvaluationBlock text="Ocena kodu w projekcie własnym" />
        <EvaluationBlock text="Ocena pracy w zespole Scrum" />
        <WorkplacePreference text="Preferowane miejsce pracy" />
        <ContactPreference text="Oczekiwany typ kontaktu" />
      </Form>
    </Container>
  );
}
