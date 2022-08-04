import React from "react";
import styled from "styled-components";
import paperclip from "../../Assets/img/paperclip.svg";

const Container = styled.div`
  & h3 {
    height: 60px;
    text-align: left;
    padding: 15px;
    background-color: var(--secondaryDark);
  }
  & p {
    height: 69px;
    padding: 20px;
  }
  & img {
    width: 30px;
    height: 20px;
  }
  & a {
    color: #0b8bd4;
    text-decoration: none;
  }
`;

interface PropsTypes {
  name: string;
  gitUserUrl: string;
}

export default function EducationAndExperienceLink({
  name,
  gitUserUrl,
}: PropsTypes) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>
        <img src={paperclip} alt="" />
        <a href={gitUserUrl}>{gitUserUrl}</a>
      </p>
    </Container>
  );
}
