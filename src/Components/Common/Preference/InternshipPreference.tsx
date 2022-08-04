import React, { useContext } from "react";
import styled from "styled-components";
import RadioInputPreference from "./RadioInputPreference";
import FilterFormContext from "../../../utils/FilterFormContext";

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
}

export default function InternshipPreference({ text }: Props) {
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { internshipPreference, handleSetInternshipPreference } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <RadioInputPreference
        text="Tak"
        name="choice"
        value="Yes"
        handleInputChange={handleSetInternshipPreference}
        internship={internshipPreference}
      />
      <RadioInputPreference
        text="Nie"
        name="choice"
        value="No"
        handleInputChange={handleSetInternshipPreference}
        internship={internshipPreference}
      />
    </Container>
  );
}
