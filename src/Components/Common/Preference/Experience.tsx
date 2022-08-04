import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import FilterFormContext from "../../../utils/FilterFormContext";

const Container = styled.div`
  margin: 0 0 9px 18px;
  font-size: 12px;
  color: var(--fontColor);
  & input {
    margin-top: 3px;
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

export default function Experience({ text }: Props) {
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { experience, handleExperience } = context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <Input
        type="number"
        value={experience ? experience.toString() : "0"}
        placeholder="0 miesięcy"
        handleInputChange={handleExperience}
        width="95px"
        height="28px"
        min={0}
      />
    </Container>
  );
}
