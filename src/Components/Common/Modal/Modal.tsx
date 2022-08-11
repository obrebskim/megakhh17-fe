import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../State/Slices/modalSlice";
import { selectModal } from "../../../State/Store/store";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.3);
  & .wrapper {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;
    background-color: var(--secondaryDark);
    & button {
      height: 40px;
      width: 150px;
      background-color: var(--buttonColor);
      border: none;
      color: var(--fontColor);
      cursor: pointer;
    }
  }
`;

function Modal() {
  const dispatch = useDispatch();
  const { message } = useSelector(selectModal);

  return (
    <Container>
      <div className="wrapper">
        <p>{message}</p>
        <button type="button" onClick={() => dispatch(close())}>
          zamknij
        </button>
      </div>
    </Container>
  );
}

export default Modal;
