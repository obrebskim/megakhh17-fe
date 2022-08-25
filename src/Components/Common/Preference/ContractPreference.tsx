import React, { useContext } from "react";
import styled from "styled-components";
import ContractPreferenceButton from "./ContractPreferenceButton";
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

export default function ContractPreference({ text }: Props) {
  const { state } = useContext(FilterFormContext);
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <ContractPreferenceButton
        text="Umowa o pracę"
        color={state.contractPreference.includes("1") ? "#E02735" : "#292A2B"}
        value="1"
      />
      <ContractPreferenceButton
        text="B2B"
        color={state.contractPreference.includes("2") ? "#E02735" : "#292A2B"}
        value="2"
      />
      <ContractPreferenceButton
        text="Umowa zlecenie / o dzieło"
        color={state.contractPreference.includes("3") ? "#E02735" : "#292A2B"}
        value="3"
      />
      <ContractPreferenceButton
        text="Brak preferencji"
        color={state.contractPreference.includes("4") ? "#E02735" : "#292A2B"}
        value="4"
      />
    </Container>
  );
}
