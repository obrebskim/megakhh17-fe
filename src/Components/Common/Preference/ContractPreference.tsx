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
        color={state.contractPreference !== "1" ? "#292A2B" : "#E02735"}
        value="1"
      />
      <ContractPreferenceButton
        text="B2B"
        color={state.contractPreference !== "2" ? "#292A2B" : "#E02735"}
        value="2"
      />
      <ContractPreferenceButton
        text="Umowa zlecenie / o dzieło"
        color={state.contractPreference !== "3" ? "#292A2B" : "#E02735"}
        value="3"
      />
      <ContractPreferenceButton
        text="Brak preferencji"
        color={state.contractPreference !== "4" ? "#292A2B" : "#E02735"}
        value="4"
      />
    </Container>
  );
}
