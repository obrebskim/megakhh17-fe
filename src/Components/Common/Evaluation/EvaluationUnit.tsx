import React from "react";
import styled from "styled-components";

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
  handleClick: (level: string) => void;
}

export default function EvaluationUnit({
  level,
  squareColor,
  className,
  handleClick,
}: Props) {
  return (
    <Container color={squareColor} onClick={() => handleClick(level)}>
      <span className="evaluation-value">{level}</span>
      <span className={className} />
    </Container>
  );
}
