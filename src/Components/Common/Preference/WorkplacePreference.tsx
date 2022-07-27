import React from "react";
import styled from "styled-components";
import PreferenceButton from "./PreferenceButton";

const Container = styled.div`
  margin-left: 18px;
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
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton text="Praca zdalna" color="#292A2B" />
      <PreferenceButton text="Praca w biurze" color="#292A2B" />
    </Container>
  );
}
