import React, { useContext } from "react";
import styled from "styled-components";
import RegisterTileHeading from "./RegisterTileHeading";
import RegisterExpectations from "./RegisterExpectations";
import RegisterTextTile from "./RegisterTextTile";
import { UserRegisterContext } from "../../Context/UserRegisterContext";

const Container = styled.main``;

const InfoSection = styled.section``;

function AccountMain() {
  const { state, dispatch } = useContext(UserRegisterContext);

  return (
    <Container>
      <InfoSection>
        <RegisterTileHeading title="Oczekiwania w stosunku do zatrudnienia" />
        <RegisterExpectations />
      </InfoSection>
      <InfoSection>
        <RegisterTileHeading title="Edukacja" />
        <RegisterTextTile
          text={state.education}
          onchange={dispatch}
          actionName="SET_EDUCATION"
        />
      </InfoSection>
      <InfoSection>
        <RegisterTileHeading title="Kursy" />
        <RegisterTextTile
          text={state.courses}
          onchange={dispatch}
          actionName="SET_COURSES"
        />
      </InfoSection>
      <InfoSection>
        <RegisterTileHeading title="Doświadczenia zawodowe" />
        <RegisterTextTile
          text={state.workExperience}
          onchange={dispatch}
          actionName="SET_WORK_EXERIENCE"
        />
      </InfoSection>
      <InfoSection>
        <RegisterTileHeading title="Portfolio" />
        <RegisterTextTile
          text={state.portfolioUrls}
          onchange={dispatch}
          actionName="SET_PORTFOLIO_URLS"
        />
      </InfoSection>
    </Container>
  );
}

export default AccountMain;
