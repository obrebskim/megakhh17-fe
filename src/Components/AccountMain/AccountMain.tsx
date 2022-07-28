import React, { useState } from "react";
import styled from "styled-components";
import TileHeading from "./TileHeading";
import Grades from "./Grades";
import Expectations from "./Expectations";
import TextTile from "./TextTile";
import LinksTile from "./LinksTile";

const Container = styled.main``;

const InfoSection = styled.section``;

function AccountMain() {
  const [education, setEducation] = useState<string>("Jakiś tekst o edukacji");
  const [expirienceDescription, setExpirienceDescription] = useState<string>(
    "Jakiś tekst o doświadczeniu zawodowym",
  );
  const [courses, setCourses] = useState<string>("Jakiś tekst o kursach");
  const portfolioLinks: string[] = ["http://github.com", "http://github.com"];

  return (
    <Container>
      <InfoSection>
        <TileHeading title="Oceny" />
        <Grades />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Oczekiwania w stosunku do zatrudnienia" />
        <Expectations />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Edukacja" />
        <TextTile text={education} onchange={setEducation} />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Kursy" />
        <TextTile text={courses} onchange={setCourses} />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Doświadczenia zawodowe" />
        <TextTile
          text={expirienceDescription}
          onchange={setExpirienceDescription}
        />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Portfolio" />
        <LinksTile links={portfolioLinks} />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Projekt w zaspole Scrumowym" />
        <LinksTile links={portfolioLinks} />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Projekt na zaliczenie" />
        <LinksTile links={portfolioLinks} />
      </InfoSection>
    </Container>
  );
}

export default AccountMain;
