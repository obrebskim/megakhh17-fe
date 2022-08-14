import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import RadioInputPreference from "./RadioInputPreference";
import { FilterFormContext } from "../../../Context/FilterFormContext";

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
  const { state, dispatch } = useContext(FilterFormContext);
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <RadioInputPreference
        text="Tak"
        name="choice"
        value={1}
        handleInputChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "SET_INTERNSHIP_PREFERENCE",
            payload: Number(e.target.value),
          });
        }}
        internship={state.internshipPreference}
      />
      <RadioInputPreference
        text="Nie"
        name="choice"
        value={0}
        handleInputChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "SET_INTERNSHIP_PREFERENCE",
            payload: Number(e.target.value),
          });
        }}
        internship={state.internshipPreference}
      />
    </Container>
  );
}
