import React from "react";
import styled from "styled-components";
import phoneIco from "../../Assets/img/phone.svg";
import mailIco from "../../Assets/img/mail.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & img {
    width: 15px;
  }
  & a {
    color: var(--fontColor);
    text-decoration: none;
  }
`;

function ContactTile() {
  return (
    <Container>
      <Wrapper>
        <img src={phoneIco} alt="" />
        <a href="tel:123-456-789">+48 123-456-789</a>
      </Wrapper>
      <Wrapper>
        <img src={mailIco} alt="" />
        <a href="mailto:marian@kowalski.pl">marian@kowalski.pl</a>
      </Wrapper>
    </Container>
  );
}

export default ContactTile;
