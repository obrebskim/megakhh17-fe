import React, { useContext } from "react";
import styled from "styled-components";
import WorkplacePreferenceButton from "./WorkplacePreferenceButton";
import { FilterFormContext } from "../../../Context/FilterFormContext";

const Container = styled.div`
  margin: 0 0 20px 18px;
`;

const PreferenceTitle = styled.span`
  display: block;
  height: 23px;
  margin: 0 0 3px 0;
  text-align: left;
  font-size: 14px;
`;

interface Props {
  text: string;
}

export default function WorkplacePreference({ text }: Props) {
  const { state } = useContext(FilterFormContext);
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <WorkplacePreferenceButton
        text="Praca w biurze"
        color={state.workplacePreference.includes("1") ? "#E02735" : "#292A2B"}
        value="1"
      />
      <WorkplacePreferenceButton
        text="Relokacja"
        color={state.workplacePreference.includes("2") ? "#E02735" : "#292A2B"}
        value="2"
      />
      <WorkplacePreferenceButton
        text="Praca zdalna"
        color={state.workplacePreference.includes("3") ? "#E02735" : "#292A2B"}
        value="3"
      />
      <WorkplacePreferenceButton
        text="Praca hybrydowa"
        color={state.workplacePreference.includes("4") ? "#E02735" : "#292A2B"}
        value="4"
      />
      <WorkplacePreferenceButton
        text="Brak preferencji"
        color={state.workplacePreference.includes("5") ? "#E02735" : "#292A2B"}
        value="5"
      />
    </Container>
  );
}
