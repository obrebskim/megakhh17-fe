import React from "react";
import styled from "styled-components";
import funnelImg from "../../Assets/img/funnel.svg";

interface PropsTypes {
  onclick: () => void;
}

const Container = styled.button`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 20px;
  background-color: var(--headerBackground);
  border: none;
  color: var(--fontColor);
  font-size: 1.6rem;
  cursor: pointer;
  & img {
    width: 20px;
  }
`;

function FilterButton({ onclick }: PropsTypes) {
  return (
    <Container onClick={onclick}>
      <img src={funnelImg} alt="" />
      <span>Filtrowanie</span>
    </Container>
  );
}

export default FilterButton;
