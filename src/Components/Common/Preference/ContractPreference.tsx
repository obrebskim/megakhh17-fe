import React, { useContext } from "react";
import styled from "styled-components";
import ContractPreferenceButton from "./ContractPreferenceButton";
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

export default function ContractPreference({ text }: Props) {
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { contractPreference } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <ContractPreferenceButton
        text="Umowa o pracę"
        color={contractPreference !== 1 ? "#292A2B" : "#E02735"}
        value={1}
      />
      <ContractPreferenceButton
        text="B2B"
        color={contractPreference !== 2 ? "#292A2B" : "#E02735"}
        value={2}
      />
      <ContractPreferenceButton
        text="Umowa zlecenie / o dzieło"
        color={contractPreference !== 3 ? "#292A2B" : "#E02735"}
        value={3}
      />
      <ContractPreferenceButton
        text="Brak preferencji"
        color={contractPreference !== 4 ? "#292A2B" : "#E02735"}
        value={4}
      />
    </Container>
  );
}
