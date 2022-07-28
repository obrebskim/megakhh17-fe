import React from "react";
import styled from "styled-components";
import imgPlaceholder from "../../Assets/img/Group 2708.svg";
import Button from "../Common/Button/Button";
import phone from "../../Assets/img/phone.svg";
import github from "../../Assets/img/github.svg";
import mail from "../../Assets/img/mail.svg";

const Container = styled.div`
  width: 200px;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px;
  & .avatar {
    margin: 20px;
    width: 120px;
    height: 120px;
  }
  & p {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 3px;
  }
  & .about {
    display: grid;
    text-align: left;
    padding: 10px;
  }
  & .icon {
    margin: 5px;
    width: 15px;
    height: 35px;
  }
  & h3 {
    font-weight: lighter;
    font-size: 24px;
  }
  & h4 {
    font-size: 16px;
    color: #4d4d4d;
    text-align: left;
  }
  & a {
    color: #0b8bd4;
  }
  & Button {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
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
      <img className="avatar" src={url} alt="avatar" />
      <h3>{name}</h3>
      <p>
        <img className="icon" src={github} alt="" />
        <a href={githubUsername}>{githubUsername}</a>
      </p>
      <p>
        <img className="icon" src={phone} alt="" />
        {`+ 48 ${phoneFormated}`}
      </p>
      <p>
        <img className="icon" src={mail} alt="" />
        {email}
      </p>
      <p className="about">
        <h4>O mnie</h4>
        {bio}
      </p>
      <Button text="Brak zainteresowania" color="#e02735" />
      <Button text="Zatrudniony" color="#e02735" />
    </Container>
  );
}
