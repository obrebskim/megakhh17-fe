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

export default function ContactPreference({ text }: Props) {
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const {
    contractPreferencePermanent,
    contractPreferenceB2B,
    contractPreferenceMandate,
    contractPreferenceContract,
    setContractPreferencePermanent,
    setContractPreferenceB2B,
    setContractPreferenceMandate,
    setContractPreferenceContract,
  } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton
        text="Umowa o pracę"
        color="#292A2B"
        value={contractPreferencePermanent}
        handleClick={setContractPreferencePermanent}
      />
      <PreferenceButton
        text="B2B"
        color="#292A2B"
        value={contractPreferenceB2B}
        handleClick={setContractPreferenceB2B}
      />
      <PreferenceButton
        text="Umowa zlecenie"
        color="#292A2B"
        value={contractPreferenceMandate}
        handleClick={setContractPreferenceMandate}
      />
      <PreferenceButton
        text="Umowa o dzieło"
        color="#292A2B"
        value={contractPreferenceContract}
        handleClick={setContractPreferenceContract}
      />
    </Container>
  );
}
