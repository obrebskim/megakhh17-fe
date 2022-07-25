import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .title {
    font-size: 1.2rem;
  }
  & .content {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

function ReservationDate() {
  return (
    <Container>
      <p className="title">Rezerwacja do</p>
      <p className="content">22.07.2022 r.</p>
    </Container>
  );
}

export default ReservationDate;
