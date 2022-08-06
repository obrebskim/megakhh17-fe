import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import FilterFormContext from "../../../utils/FilterFormContext";

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
}

export default function FinancialPreference({ text }: Props) {
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { salaryMin, salaryMax, handleSetSalaryMin, handleSetSalaryMax } =
    context;
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      od
      <Input
        type="number"
        value={salaryMin ? salaryMin.toString() : "0"}
        name="min"
        placeholder="np. 1000 zł"
        handleInputChange={handleSetSalaryMin}
        width="95px"
        height="28px"
      />
      do
      {salaryMin !== null && (
        <Input
          type="number"
          value={
            salaryMax // && salaryMax > salaryMin
              ? salaryMax.toString()
              : salaryMin.toString()
          }
          placeholder="np. 10000 zł"
          handleInputChange={handleSetSalaryMax}
          width="105px"
          height="28px"
          min={salaryMin}
        />
      )}
    </Container>
  );
}
