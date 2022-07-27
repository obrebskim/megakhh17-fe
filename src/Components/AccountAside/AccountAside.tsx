import React from "react";
import styled from "styled-components";
import Avatar from "../Common/Avatar/Avatar";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--secondaryDark);
`;

function AccountAside() {
  return (
    <Container>
      <Avatar name="Marian Kowalski" vertical />
    </Container>
  );
}

export default AccountAside;
