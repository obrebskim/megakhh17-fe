import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import RegisterContactTile from "./RegisterContactTile";
import RegisterAboutTile from "./RegisterAboutTile";
import { UserRegisterContext } from "../../Context/UserRegisterContext";

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

  const handleRegisterStudent = async () => {
    if (id) {
      const token = id || "";
      try {
        const resp = await fetch("http://localhost:3000/students-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...state, registerToken: token }),
        });
        const data = await resp.json();
        console.log(data);
        navigate("/");
      } catch (e) {
        console.log(e);
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
