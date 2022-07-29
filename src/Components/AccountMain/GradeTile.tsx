import React from "react";
import styled from "styled-components";
import { ReactComponent as StarIco } from "../../Assets/img/star.svg";

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
    align-items: center;
    & p {
      font-size: 18px;
      & span {
        font-weight: bold;
      }
    }
  }
  & .stars {
    display: flex;
    align-items: center;
    gap: 5px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

interface PropsTypes {
  title: string;
  grade: string;
}

function GradeTile({ title, grade }: PropsTypes) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Container>
      <p className="title">{title}</p>
      <div className="grade">
        <p>
          <span>{grade}</span>/5
        </p>
        <div className="stars">
          {stars.map((s) => (
            <StarIco
              style={{
                fill: `${
                  s <= Number(grade)
                    ? "var(--buttonColor)"
                    : "var(--ternaryFontColor)"
                }`,
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default GradeTile;
