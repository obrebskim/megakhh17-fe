import React from "react";
import styled from "styled-components";
import imgPlaceholder from "../../../Assets/img/Group 2708.svg";

interface PropsTypes {
  name: string;
  imgUrl?: string;
}

const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export default function Avatar({ name, imgUrl }: PropsTypes) {
  const url = imgUrl || imgPlaceholder;

  return (
    <Container>
      <img src={url} alt="avatar" />
      <p>{name}</p>
    </Container>
  );
}
