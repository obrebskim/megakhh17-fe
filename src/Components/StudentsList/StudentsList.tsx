import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  background-color: var(--primaryDark);
`;

interface PropsTypes {
  children: JSX.Element | JSX.Element[];
}

function StudentsList({ children }: PropsTypes) {
  return <Container>{children}</Container>;
}

export default StudentsList;
