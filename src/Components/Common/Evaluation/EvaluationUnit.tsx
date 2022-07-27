import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 27px;
  margin-bottom: 20px;
  background-color: var(--secondaryDark);
  cursor: pointer;
  & .evaluation-value {
    color: var(--fontColor);
    margin-right: 4px;
  }
  & .star {
    display: block;
    width: 12px;
    height: 12px;
    color: var(--buttonColor);
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
`;

interface Props {
  number: number;
}

export default function EvaluationUnit({ number }: Props) {
  const handleSelectEvaluation = (e: any) => {
    console.log(e.target.innerText);
  };

  return (
    <Container onClick={handleSelectEvaluation}>
      <span className="evaluation-value">{number}</span>
      <span className="star">{number}</span>
    </Container>
  );
}
