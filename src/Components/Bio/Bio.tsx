import React from "react";
import styled from "styled-components";
import BioGrades from "./BioGrades";
import BioWorkPreferences from "./BioWorkPreferences";
import BioEducationAndExperience from "./BioEducationAndExperience";
import BioPersonalInfo from "./BioPersonalInfo";

const Container = styled.div`
  width: 1430px;
  height: auto;
  display: flex;
  background-color: var(--secondaryDark);
`;

const BioInfo = styled.div`
  width: 15%;
  margin: 25px;
`;

const Preferences = styled.div`
  width: 85%;
`;

export default function Bio() {
  return (
    <Container>
      <BioInfo>
        <BioPersonalInfo
          name="Jan Kowalski"
          githubUsername="jankowalski"
          email="jankowalski@gmail.com"
          tel="555222333"
          bio="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
        />
      </BioInfo>
      <Preferences>
        <BioGrades />
        <BioWorkPreferences />
        <BioEducationAndExperience
          education="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          courses="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          workExperience="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          githubUsername="https://github/portfolio"
          projectUrls="https://github/scrum"
          portfolioUrls="https://github/courseFinal"
        />
      </Preferences>
    </Container>
  );
}
