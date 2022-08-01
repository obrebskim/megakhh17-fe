import React from "react";
import styled from "styled-components";
import { ReactComponent as PencilIco } from "../../../Assets/img/pencil.svg";
import { ReactComponent as OkIco } from "../../../Assets/img/ok.svg";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & svg {
    width: 15px;
    height: 15px;
  }
`;

interface PropsType {
  value: boolean;
  onclick: () => void;
}

function EditButton({ value, onclick }: PropsType) {
  return (
    <Container type="button" onClick={onclick}>
      {value ? <OkIco /> : <PencilIco />}
    </Container>
  );
}

export default EditButton;
