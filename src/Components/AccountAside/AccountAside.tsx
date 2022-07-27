import React from "react";
import styled from "styled-components";
import Avatar from "../Common/Avatar/Avatar";
import ContactTile from "./ContactTile";
import AboutTile from "./AboutTile";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--secondaryDark);
  & button {
    height: 40px;
    width: 100%;
    background-color: var(--buttonColor);
    color: var(--fontColor);
  }
`;

function AccountAside() {
  return (
    <Container>
      <Avatar name="Marian Kowalski" vertical />
      <ContactTile />
      <AboutTile />
      <button type="button">wyloguj</button>
    </Container>
  );
}

export default AccountAside;
