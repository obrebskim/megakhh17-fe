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
  permanent: boolean;
  b2b: boolean;
  mandate: boolean;
  contract: boolean;
  handleClickPermanent: (status: boolean) => void;
  handleClickB2B: (status: boolean) => void;
  handleClickMandate: (status: boolean) => void;
  handleClickContract: (status: boolean) => void;
}

export default function ContactPreference({
  text,
  permanent,
  b2b,
  mandate,
  contract,
  handleClickPermanent,
  handleClickB2B,
  handleClickMandate,
  handleClickContract,
}: Props) {
  return (
    <Container>
      <PreferenceTitle>{text}</PreferenceTitle>
      <PreferenceButton
        text="Umowa o pracę"
        color="#292A2B"
        value={permanent}
        handleClick={handleClickPermanent}
      />
      <PreferenceButton
        text="B2B"
        color="#292A2B"
        value={b2b}
        handleClick={handleClickB2B}
      />
      <PreferenceButton
        text="Umowa zlecenie"
        color="#292A2B"
        value={mandate}
        handleClick={handleClickMandate}
      />
      <PreferenceButton
        text="Umowa o dzieło"
        color="#292A2B"
        value={contract}
        handleClick={handleClickContract}
      />
    </Container>
  );
}
