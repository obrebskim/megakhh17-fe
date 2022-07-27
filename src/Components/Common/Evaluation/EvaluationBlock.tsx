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
}

export default function EvaluationBlock({ text }: Props) {
  return (
    <>
      <Title>{text}</Title>
      <Container>
        <EvaluationUnit number={5} />
        <EvaluationUnit number={4} />
        <EvaluationUnit number={3} />
        <EvaluationUnit number={2} />
        <EvaluationUnit number={1} />
      </Container>
    </>
  );
}
