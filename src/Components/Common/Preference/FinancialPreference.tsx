import React, { ChangeEvent } from "react";
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
  min: number | null;
  max: number | null;
  handleMin: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMax: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FinancialPreference({
  text,
  min,
  max,
  handleMin,
  handleMax,
}: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      od
      <Input
        type="number"
        value={min ? min.toString() : ""}
        name="min"
        placeholder="np. 1000 zł"
        handleInputChange={handleMin}
        width="95px"
        height="28px"
      />
      do
      <Input
        type="number"
        value={max ? max.toString() : ""}
        name="max"
        placeholder="np. 10000 zł"
        handleInputChange={handleMax}
        width="105px"
        height="28px"
      />
    </Container>
  );
}
