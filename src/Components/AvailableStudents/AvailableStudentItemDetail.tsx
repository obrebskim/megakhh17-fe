import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 110px;
  display: grid;
  grid-template-columns: repeat(5, 100px) repeat(2, 130px) repeat(3, 1fr);
  gap: 4px;
  background-color: var(--secondaryDark);
  & > div {
    height: 100%;
    background-color: var(--tirnaryDark);
    padding: 10px;
  }
`;

function AvailableStudentItemDetail() {
  return (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </Container>
  );
}

export default AvailableStudentItemDetail;
