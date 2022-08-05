import React, { useContext } from "react";
import styled from "styled-components";
import WorkplacePreferenceButton from "./WorkplacePreferenceButton";
import FilterFormContext from "../../../utils/FilterFormContext";

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
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { workplacePreference } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <WorkplacePreferenceButton
        text="Praca w biurze"
        color={workplacePreference !== 1 ? "#292A2B" : "#E02735"}
        value={1}
      />
      <WorkplacePreferenceButton
        text="Relokacja"
        color={workplacePreference !== 2 ? "#292A2B" : "#E02735"}
        value={2}
      />
      <WorkplacePreferenceButton
        text="Praca zdalna"
        color={workplacePreference !== 3 ? "#292A2B" : "#E02735"}
        value={3}
      />
      <WorkplacePreferenceButton
        text="Praca hybrydowa"
        color={workplacePreference !== 4 ? "#292A2B" : "#E02735"}
        value={4}
      />
      <WorkplacePreferenceButton
        text="Brak preferencji"
        color={workplacePreference !== 5 ? "#292A2B" : "#E02735"}
        value={5}
      />
    </Container>
  );
}
