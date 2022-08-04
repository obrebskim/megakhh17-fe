import React, { useContext } from "react";
import styled from "styled-components";
import EvaluationUnit from "./EvaluationUnit";
import FilterFormContext from "../../../utils/FilterFormContext";

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
  handleClick: (level: number) => void;
}

export default function EvaluationBlock({
  text,
  row,
  handleClick,
}: Props) {
  const levels = [5, 4, 3, 2, 1];
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const {
    courseEvaluation,
    activityEvaluation,
    codeEvaluation,
    teamEvaluation,
  } = context;
  return (
    <>
      <Title>{text}</Title>
      <Container>
        {levels.map((count) => (
          <EvaluationUnit
            key={count}
            level={count}
            squareColor={
              (row === 1 && courseEvaluation === count) ||
              (row === 2 && activityEvaluation === count) ||
              (row === 3 && codeEvaluation === count) ||
              (row === 4 && teamEvaluation === count)
                ? "#E02735"
                : "#292A2B"
            }
            className={
              (row === 1 && courseEvaluation === count) ||
              (row === 2 && activityEvaluation === count) ||
              (row === 3 && codeEvaluation === count) ||
              (row === 4 && teamEvaluation === count)
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
