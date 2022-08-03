import React, { ChangeEvent } from "react";
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
  // internship: string | null;
  handleInternship: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InternshipPreference({
  text,
  // internship,
  handleInternship,
}: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <RadioInputPreference
        text="Tak"
        name="choice"
        value="Yes"
        handleInputChange={handleInternship}
      />
      <RadioInputPreference
        text="Nie"
        name="choice"
        value="No"
        handleInputChange={handleInternship}
      />
    </Container>
  );
}
