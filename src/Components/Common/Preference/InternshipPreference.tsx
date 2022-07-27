import React from "react";
import styled from "styled-components";
import RadioInputPreference from "./RadioInputPreference";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 0 20px 18px;
  font-size: 12px;
  color: var(--fontColor);
  & input {
    margin: 0 10px 0 0;
  }
  & label {
    font-size: 14px;
  }
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
  onChange: () => void;
}

export default function InternshipPreference({ text, onChange }: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <RadioInputPreference
        text="Tak"
        name="Yes"
        value=""
        handleInputChange={() => onChange}
      />
      <RadioInputPreference
        text="Nie"
        name="No"
        value=""
        handleInputChange={() => onChange}
      />
    </Container>
  );
}
