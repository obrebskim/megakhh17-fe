import React from "react";
import styled from "styled-components";

const Container = styled.h2`
  height: 60px;
  padding-left: 25px;
  line-height: 60px;
  background-color: var(--secondaryDark);
  font-size: 2rem;
`;

interface PropsTypes {
  title: string;
}

function RegisterTileHeading({ title }: PropsTypes) {
  return <Container>{title}</Container>;
}

export default RegisterTileHeading;
