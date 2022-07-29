import React, { useContext } from "react";
import styled from "styled-components";
import TileHeading from "./TileHeading";
import Grades from "./Grades";
import Expectations from "./Expectations";
import TextTile from "./TextTile";
import LinksTile from "./LinksTile";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.main``;

const InfoSection = styled.section``;

function AccountMain() {
  const portfolioLinks: string[] = [
    "http://github.com/1",
    "http://github.com/2",
  ];
  const { state, dispatch } = useContext(UserAccountContext);

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
        <TextTile
          text={state.education}
          onchange={dispatch}
          actionName="SET_EDUCATION"
        />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Kursy" />
        <TextTile
          text={state.courses}
          onchange={dispatch}
          actionName="SET_COURSES"
        />
      </InfoSection>
      <InfoSection>
        <TileHeading title="Doświadczenia zawodowe" />
        <TextTile
          text={state.experience}
          onchange={dispatch}
          actionName="SET_EXPERIENCE"
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
