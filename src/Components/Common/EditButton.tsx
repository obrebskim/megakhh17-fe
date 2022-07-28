import React from "react";
import styled from "styled-components";
import pencilIco from "../../Assets/img/pencil.svg";
import okIco from "../../Assets/img/ok.svg";

const Container = styled.button`
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  & img {
    width: 15px;
  }
`;

interface PropsType {
  value: boolean;
  onclick: () => void;
}

function EditButton({ value, onclick }: PropsType) {
  return (
    <Container type="button" onClick={onclick}>
      {value ? <img src={okIco} alt="" /> : <img src={pencilIco} alt="" />}
    </Container>
  );
}

export default EditButton;
