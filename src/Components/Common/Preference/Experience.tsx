import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import { FilterFormContext } from "../../../Context/FilterFormContext";

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
  const { state, dispatch } = useContext(FilterFormContext);
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <Input
        type="number"
        value={state.experience ? state.experience.toString() : "0"}
        placeholder="0 miesięcy"
        handleInputChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "SET_EXPERIENCE",
            payload: Number(e.target.value),
          });
        }}
        width="95px"
        height="28px"
        min={0}
      />
    </Container>
  );
}
