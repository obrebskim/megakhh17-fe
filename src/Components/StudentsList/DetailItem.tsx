import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: var(--tirnaryDark);
  font-size: 1.2rem;
  & .content {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

interface PropsTypes {
  title: string;
  content: string | number;
}

function DetailItem({ title, content }: PropsTypes) {
  return (
    <Container>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </Container>
  );
}

export default DetailItem;
