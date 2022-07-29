import React from "react";
import styled from "styled-components";
import AccountAside from "../../Components/AccountAside/AccountAside";
import AccountMain from "../../Components/AccountMain/AccountMain";
import Header from "../../Components/Header/Header";
import UserAccountProvider from "../../Context/UserAccountContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 1430px;
  margin: auto;
  display: grid;
  grid-template-columns: 250px auto;
  gap: 5px;
  padding: 30px 0;
`;

function Account() {
  return (
    <Container>
      <Header />
      <UserAccountProvider>
        <Wrapper>
          <AccountAside />
          <AccountMain />
        </Wrapper>
      </UserAccountProvider>
    </Container>
  );
}

export default Account;
