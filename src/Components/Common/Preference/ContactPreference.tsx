import React from "react";
import styled from "styled-components";
import PreferenceButton from "./PreferenceButton";

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
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton text="Umowa o pracę" color="#292A2B" />
      <PreferenceButton text="B2B" color="#292A2B" />
      <PreferenceButton text="Umowa zlecenie" color="#292A2B" />
      <PreferenceButton text="Umowa o dzieło" color="#292A2B" />
    </Container>
  );
}
