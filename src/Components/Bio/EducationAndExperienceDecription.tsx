import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1220px;
  & h3 {
    height: 60px;
    text-align: left;
    padding: 15px;
    background-color: var(--secondaryDark);
  }
  & p {
    height: 69px;
    padding: 20px;
  }
`;

interface PropsTypes {
  name: string;
  description: string;
}
export default function EducationAndExperienceDescription({
  name,
  description,
}: PropsTypes) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
}
