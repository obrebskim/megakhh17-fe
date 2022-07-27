import React from "react";
import styled from "styled-components";
import imgPlaceholder from "../../../Assets/img/Group 2708.svg";
import githubIco from "../../../Assets/img/github.svg";

interface PropsTypes {
  name: string;
  imgUrl?: string;
  vertical?: boolean;
}

type StyledProps = {
  vertical: boolean;
};

const Container = styled.div<StyledProps>`
  width: 200px;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.vertical && "2.4rem"};
  & img {
    width: ${(props) => props.vertical && "70%"};
  }
  & a,
  & a:active,
  & a:visited {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #0b8bd4;
    font-size: 16px;
    & img {
      width: 25px;
    }
  }
`;

export default function Avatar({ name, imgUrl, vertical = false }: PropsTypes) {
  const url = imgUrl || imgPlaceholder;

  return (
    <Container vertical={vertical}>
      <img src={url} alt="avatar" />
      <p>{name}</p>
      {vertical && (
        <a href="https://github.com">
          <img src={githubIco} alt="" /> kowalsim
        </a>
      )}
    </Container>
  );
}
