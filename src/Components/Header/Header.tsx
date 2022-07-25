import React from "react";
import styled from "styled-components";
import Avatar from "../Common/Avatar/Avatar";
import Logo from "../Common/Logo/Logo";
import PlaceholderDiv from "../Common/PlaceholderDiv/PlaceholderDiv";
import DownArrow from "./DownArrow";

const Container = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--headerBackground);
`;

const Wrapper = styled.div`
  width: 1430px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 90px auto 200px 40px;
  gap: 20px;
  align-items: center;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo width="90px" />
        <PlaceholderDiv />
        <Avatar name="Name Surname" />
        <DownArrow />
      </Wrapper>
    </Container>
  );
}
