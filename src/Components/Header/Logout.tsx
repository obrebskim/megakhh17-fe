import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 250px;
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  & button {
    height: 40px;
    padding: 0 20px;
    background-color: var(--headerBackground);
    border: none;
    text-align: left;
    color: var(--fontColor);
    font-size: 1.8rem;
  }
`;

function Logout() {
  const navigate = useNavigate();
  const handleRedirect = (path: string): void => {
    navigate(path);
  };
  const handleLogout = () => {
    // logout logic
    navigate("/");
  };

  return (
    <Container>
      <button type="button" onClick={() => handleRedirect("account")}>
        Konto
      </button>
      <button type="button" onClick={handleLogout}>
        Wyloguj
      </button>
    </Container>
  );
}

export default Logout;
