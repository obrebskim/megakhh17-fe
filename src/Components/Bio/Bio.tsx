import React from "react";
import styled from "styled-components";
import BioGrades from "./BioGrades";
import BioWorkPreferences from "./BioWorkPreferences";
import BioEducationAndExperience from "./BioEducationAndExperience";
import BioPersonalInfo from "./BioPersonalInfo";

const Container = styled.div`
  box-sizing: border-box;
  height: 110px;
  display: table-row-group;
  background-color: var(--secondaryDark);
`;

const BioInfo = styled.div`
  width: 15%;
  float: left;
`;

const Preferences = styled.div`
  width: 85%;
  float: right;
`;

export default function Bio() {
  return (
    <Container>
      <BioInfo>
        <BioPersonalInfo
          name="Jan Kowalski"
          githubUsername="jkowalski"
          email="jankowalski@gmail.com"
          tel="555222333"
          bio="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
        />
      </BioInfo>
      <Preferences>
        <BioGrades />
        <BioWorkPreferences />
        <BioEducationAndExperience
          education="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sr invidunt ut laborertet clita katakimaem ipsum dolor sit amet."
          courses="megak"
          workExperience="2 lata"
          githubUsername="https://github/portfolio"
          projectUrls="https://github/scrum"
          portfolioUrls="https://github/courseFinal"
        />
      </Preferences>
    </Container>
  );
}
