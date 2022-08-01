import React from "react";
import styled from "styled-components";
import EvaluationUnit from "./EvaluationUnit";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 242px;
  margin-left: 18px;
`;

const Title = styled.span`
  display: block;
  height: 23px;
  margin: 0 0 3px 18px;
  text-align: left;
  font-size: 14px;
`;

interface Props {
  text: string;
  row: number;
  course: number;
  activity: number;
  code: number;
  team: number;
  handleClick: (level: number) => void;
}

export default function EvaluationBlock({
  text,
  row,
  course,
  activity,
  code,
  team,
  handleClick,
}: Props) {
  const levels = [5, 4, 3, 2, 1];

  return (
    <>
      <Title>{text}</Title>
      <Container>
        {levels.map((count) => (
          <EvaluationUnit
            key={count}
            level={count}
            squareColor={
              (row === 1 && course === count) ||
              (row === 2 && activity === count) ||
              (row === 3 && code === count) ||
              (row === 4 && team === count)
                ? "#E02735"
                : "#292A2B"
            }
            className={
              (row === 1 && course === count) ||
              (row === 2 && activity === count) ||
              (row === 3 && code === count) ||
              (row === 4 && team === count)
                ? "star-active"
                : "star"
            }
            handleClick={handleClick}
          />
        ))}
      </Container>
    </>
  );
}
