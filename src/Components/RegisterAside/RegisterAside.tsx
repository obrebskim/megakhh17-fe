import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegisterContactTile from "./RegisterContactTile";
import RegisterAboutTile from "./RegisterAboutTile";
import { UserRegisterContext } from "../../Context/UserRegisterContext";
import { close, open } from "../../State/Slices/modalSlice";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--secondaryDark);
  & .button {
    height: 40px;
    width: 100%;
    background-color: var(--buttonColor);
    border: none;
    color: var(--fontColor);
    cursor: pointer;
  }
`;

function AccountAside() {
  const { state } = useContext(UserRegisterContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterStudent = async () => {
    if (id) {
      const token = id || "";
      try {
        await fetch("http://localhost:3000/students-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...state,
            registerToken: token,
            portfolioUrls: `https://github.com/${state.githubUsername}`,
            githubPhotoUrl: `https://github.com/${state.githubUsername}.png`,
          }),
        });
        dispatch(
          open({
            isOpen: true,
            message: "Rejestracja przebieła pomyślnie.",
          }),
        );
        setTimeout(() => {
          dispatch(close());
          navigate("/");
        }, 2000);
        navigate("/");
      } catch (e) {
        dispatch(
          open({
            isOpen: true,
            message: "Coś poszło nie tak! Spróbuj jeszcze raz.",
          }),
        );
      }
    }
  };
  return (
    <Container>
      <RegisterContactTile />
      <RegisterAboutTile />
      <button className="button" type="button" onClick={handleRegisterStudent}>
        zarejestruj
      </button>
    </Container>
  );
}

export default AccountAside;
