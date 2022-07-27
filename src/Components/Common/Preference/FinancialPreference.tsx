import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const Container = styled.div`
  margin: 0 0 20px 18px;
  font-size: 12px;
  color: var(--fontColor);
  & input {
    margin: 0 13px 0 8px;
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

export default function FinancialPreference({ text, onChange }: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      od
      <Input
        type="number"
        value=""
        placeholder="np. 1000 zł"
        handleInputChange={onChange}
        width="95px"
        height="28px"
      />
      do
      <Input
        type="number"
        value=""
        placeholder="np. 10000 zł"
        handleInputChange={onChange}
        width="95px"
        height="28px"
      />
    </Container>
  );
}
