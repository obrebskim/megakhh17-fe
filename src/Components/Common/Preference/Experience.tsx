import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

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
  onChange: () => void;
}

export default function Experience({ text, onChange }: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <Input
        type="number"
        value=""
        placeholder="0 miesięcy"
        handleInputChange={onChange}
        width="95px"
        height="28px"
      />
    </Container>
  );
}
