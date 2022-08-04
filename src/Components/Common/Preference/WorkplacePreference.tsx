import React, { useContext } from "react";
import styled from "styled-components";
import PreferenceButton from "./PreferenceButton";
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

  const {
    workplacePreferenceRemote,
    workplacePreferenceOffice,
    setWorkplacePreferenceRemote,
    setWorkplacePreferenceOffice,
  } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton
        text="Praca zdalna"
        color="#292A2B"
        value={workplacePreferenceRemote}
        handleClick={setWorkplacePreferenceRemote}
        disabled={workplacePreferenceOffice}
      />
      <PreferenceButton
        text="Praca w biurze"
        color="#292A2B"
        value={workplacePreferenceOffice}
        handleClick={setWorkplacePreferenceOffice}
        disabled={workplacePreferenceRemote}
      />
    </Container>
  );
}
