import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  & .title {
    font-size: 1.4rem;
    color: var(--secondaryFontColor);
  }
  & .grade {
    display: flex;
    gap: 10px;
    & p {
      font-size: 18px;
      & span {
        font-weight: bold;
      }
    }
  }
`;

interface PropsTypes {
  title: string;
  grade: string;
}

function GradeTile({ title, grade }: PropsTypes) {
  return (
    <Container>
      <p className="title">{title}</p>
      <div className="grade">
        <p>
          <span>{grade}</span>/5
        </p>
        <div className="stars">stars</div>
      </div>
    </Container>
  );
}

export default GradeTile;
