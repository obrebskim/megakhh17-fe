import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Bio from "../../Components/Bio/Bio";
import Header from "../../Components/Header/Header";
import { selectUser } from "../../State/Store/store";

const Container = styled.section`
  width: auto;
  height: auto;
  display: grid;
`;

export default function CuriculumVitae() {
  const user = useSelector(selectUser);

  if (user.role !== 2) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Header />
      <Bio />
    </Container>
  );
}
