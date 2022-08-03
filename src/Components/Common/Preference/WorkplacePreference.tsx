import React from "react";
import styled from "styled-components";
import PreferenceButton from "./PreferenceButton";

const Container = styled.div`
  margin: 0 0 20px 18px;
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
  remote: boolean;
  office: boolean;
  handleClickRemote: (status: boolean) => void;
  handleClickOffice: (status: boolean) => void;
}

export default function WorkplacePreference({
  text,
  remote,
  office,
  handleClickRemote,
  handleClickOffice,
}: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton
        text="Praca zdalna"
        color="#292A2B"
        value={remote}
        handleClick={handleClickRemote}
        disabled={office}
      />
      <PreferenceButton
        text="Praca w biurze"
        color="#292A2B"
        value={office}
        handleClick={handleClickOffice}
        disabled={remote}
      />
    </Container>
  );
}
