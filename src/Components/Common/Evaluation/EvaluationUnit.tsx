import React, { useContext } from "react";
import styled from "styled-components";
import { FilterFormContext } from "../../../Context/FilterFormContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 27px;
  margin-bottom: 20px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  & .evaluation-value {
    color: var(--fontColor);
    margin-right: 4px;
  }
  & .star {
    width: 12px;
    height: 12px;
    background-color: var(--buttonColor);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
  & .star-active {
    width: 12px;
    height: 12px;
    background-color: var(--fontColor);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
`;

interface Props {
  level: string;
  squareColor: string;
  className: string;
  row: string;
  handleClick: (level: string) => void;
}

export default function EvaluationUnit({
  level,
  squareColor,
  className,
  row,
  handleClick,
}: Props) {
  const { state } = useContext(FilterFormContext);
  const stateEvaluation = (currentState: string) => {
    if (currentState === "0") {
      handleClick(level);
    } else {
      const array = currentState.split(",");
      if (array.includes(level)) {
        handleClick(array.filter((el) => el !== level).join());
      } else {
        handleClick([...array, level].sort().join());
      }
    }
  };

  const evaluationSelect = () => {
    if (row === "1") {
      stateEvaluation(state.courseEvaluation);
    }
    if (row === "2") {
      stateEvaluation(state.activityEvaluation);
    }
    if (row === "3") {
      stateEvaluation(state.codeEvaluation);
    }
    if (row === "4") {
      stateEvaluation(state.teamEvaluation);
    }
  };

  if (state.courseEvaluation === "" && row === "1") {
    handleClick("0");
  }
  if (state.activityEvaluation === "" && row === "2") {
    handleClick("0");
  }
  if (state.codeEvaluation === "" && row === "3") {
    handleClick("0");
  }
  if (state.teamEvaluation === "" && row === "4") {
    handleClick("0");
  }

  return (
    <Container color={squareColor} onClick={evaluationSelect}>
      <span className="evaluation-value">{level}</span>
      <span className={className} />
    </Container>
  );
}
