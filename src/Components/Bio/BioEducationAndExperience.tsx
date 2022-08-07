import React from "react";
import styled from "styled-components";
import EducationAndExperienceLink from "./EducationAndExperienceLink";
import EducationAndExperienceDescription from "./EducationAndExperienceDecription";

const Container = styled.div`
  height: 110px;
  display: table-row;
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
      <EducationAndExperienceDescription
        name="Edukacja"
        description={education}
      />
      <EducationAndExperienceDescription name="Kursy" description={courses} />
      <EducationAndExperienceDescription
        name="Doświadczenie zawodowe"
        description={workExperience}
      />
      <EducationAndExperienceLink
        name="Portfolio"
        gitUserUrl={githubUsername}
      />
      <EducationAndExperienceLink
        name="Projekt w zespole Scrumowym"
        gitUserUrl={projectUrls}
      />
      <EducationAndExperienceLink
        name="Projekt na zaliczenie"
        gitUserUrl={portfolioUrls}
      />
    </Container>
  );
}
