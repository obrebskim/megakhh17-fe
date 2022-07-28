import React from "react";
import styled from "styled-components";
import paperclip from "../../Assets/img/paperclip.svg";

const Container = styled.div`
  height: 110px;
  width: available;
  display: table-row;
  gap: 4px;
  & img {
    width: 30px;
    height: 20px;
  }
  & p {
    width: border-box;
    background-color: var(--primaryDark);
    padding: 20px;
    word-wrap: break-word;
  }
  & a {
    color: #0b8bd4;
  }
`;

interface PropsTypes {
  education: string;
  workExperience: string;
  courses: string;
  githubUsername: string;
  projectUrls: string;
  portfolioUrls: string;
}

export default function BioEducationAndExperience({
  education,
  workExperience,
  portfolioUrls,
  projectUrls,
  courses,
  githubUsername,
}: PropsTypes) {
  return (
    <Container>
      <h3>Edukacja</h3>
      <p>{education}</p>
      <h3>Kursy</h3>
      <p>{courses}</p>
      <h3>Doświadczenie zawodowe</h3>
      <p>{workExperience}</p>
      <h3>Portfolio</h3>
      <p>
        <img src={paperclip} alt="" />
        <a href={githubUsername}>{githubUsername}</a>
      </p>
      <h3>Projekt w zespole Scrumowym</h3>
      <p>
        <img src={paperclip} alt="" />
        <a href={projectUrls}>{projectUrls}</a>
      </p>

      <h3>Projekt na zaliczenie</h3>
      <p>
        <img src={paperclip} alt="" />
        <a href={portfolioUrls}>{portfolioUrls}</a>
      </p>
    </Container>
  );
}
