import React from "react";
import styled from "styled-components";
import star from "../../Assets/img/star.svg";
import starRed from "../../Assets/img/star-red.svg";

const Container = styled.div`
  display: table-row;
  background-color: var(--primaryDark);
  & img {
    width: 20px;
    height: 20px;
  }
  & .grade {
    display: inline-flex;
    font-weight: bold;
  }
`;

interface PropsTypes {
  name: string;
  grade: number;
}

export default function Stars({ name, grade }: PropsTypes) {
  const starsRed: JSX.Element[] = [];
  for (let i = 0; i < grade; i += 1) {
    starsRed.push(<img src={starRed} alt="" />);
  }

  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5 - grade; i += 1) {
    stars.push(<img src={star} alt="" />);
  }
  return (
    <Container>
      <p>{name}</p>
      <p className="grade">
        {grade}/5 {starsRed}
        {stars}
      </p>
    </Container>
  );
}
