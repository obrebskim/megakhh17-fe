import React from "react";
import styled from "styled-components";
import imgPlaceholder from "../../Assets/img/Group 2708.svg";
import Button from "../Common/Button/Button";
import phone from "../../Assets/img/phone.svg";
import github from "../../Assets/img/github.svg";
import mail from "../../Assets/img/mail.svg";

const Container = styled.div`
  display: grid;
  width: 200px;
  background-color: var(--secondaryDark);
  padding: 15px;
  & Button {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  & .avatar {
    width: 150px;
    height: 150px;
  }
  & .git-icon {
    margin: 5px;
    width: 30px;
    height: 30px;
  }
  & .git {
    display: flex;
    align-items: center;
  }
  & h3 {
    font-weight: lighter;
    font-size: 24px;
  }
  & a {
    color: #0b8bd4;
    text-decoration: none;
  }
`;

const Contact = styled.div`
  & p {
    margin: 10px;
    display: flex;
    align-items: center;
  }
  & .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const About = styled.div`
  & p {
    margin: 5px;
  }
  & h4 {
    font-size: 16px;
    color: #4d4d4d;
    text-align: left;
  }
`;

interface PropsTypes {
  name: string;
  imgUrl?: string;
  githubUsername: string;
  tel: string;
  email: string;
  bio: string;
}

export default function BioPersonalInfo({
  name,
  imgUrl,
  githubUsername,
  tel,
  email,
  bio,
}: PropsTypes) {
  const url = imgUrl || imgPlaceholder;
  const phoneFormated = tel.replace(/(.{3})/g, "$& ").trim();

  return (
    <Container>
      <Header>
        <img className="avatar" src={url} alt="avatar" />
        <h3>{name}</h3>
        <p className="git">
          <img className="git-icon" src={github} alt="" />
          <a href={githubUsername}>{githubUsername}</a>
        </p>
      </Header>
      <Contact>
        <p>
          <img className="icon" src={phone} alt="" />
          {`+ 48 ${phoneFormated}`}
        </p>
        <p>
          <img className="icon" src={mail} alt="" />
          {email}
        </p>
      </Contact>
      <About>
        <p>
          <h4>O mnie</h4>
          {bio}
        </p>
      </About>
      <Button text="Brak zainteresowania" color="#e02735" />
      <Button text="Zatrudniony" color="#e02735" />
    </Container>
  );
}
