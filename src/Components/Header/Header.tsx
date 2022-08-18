import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Avatar from "../Common/Avatar/Avatar";
import Logo from "../Common/Logo/Logo";
import PlaceholderDiv from "../Common/PlaceholderDiv/PlaceholderDiv";
import DownArrow from "./DownArrow";
import Logout from "./Logout";
import { selectUser } from "../../State/Store/store";

const Container = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--headerBackground);
`;

const Wrapper = styled.div`
  width: 1430px;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 90px auto 200px 40px;
  gap: 20px;
  align-items: center;
  margin: auto;
`;

export default function Header() {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpenChange = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <Wrapper>
        <Logo width="80px" />
        <PlaceholderDiv />
        <Avatar name={user.fullName} />
        <DownArrow onclick={handleIsOpenChange} />
        {isOpen && <Logout />}
      </Wrapper>
    </Container>
  );
}
