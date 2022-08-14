import React from "react";
import styled from "styled-components";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../State/Slices/userSlice";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRedirect = (path: string): void => {
    navigate(path);
  };
  const handleLogout = async () => {
    // const response = await fetch(`http://localhost:3000/auth/logout`);
    // const resp = await response.json();
    // if (resp.ok) {
    //   dispatch(logout());
    //   navigate("/");
    // }
    // axios
    //   .get(`http://localhost:3000/auth/logout`, {
    //     withCredentials: true,
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Credentials": true,
    //         "Set-Cookie"
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      <button type="button" onClick={() => handleRedirect("/account")}>
        Konto
      </button>
      <button type="button" onClick={handleLogout}>
        Wyloguj
      </button>
    </Container>
  );
}

export default Logout;
