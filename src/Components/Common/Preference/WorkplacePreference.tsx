import React from "react";
import styled from "styled-components";

const PreferenceTitle = styled.span`
  display: block;
  height: 23px;
  margin: 0 0 3px 18px;
  text-align: left;
  font-size: 14px;
`;

interface Props {
  text: string;
}

export default function WorkplacePreference({ text }: Props) {
  return (
    <>
      <PreferenceTitle>{text}</PreferenceTitle>
      <button>Praca zdalna</button>
    </>
  );
}
