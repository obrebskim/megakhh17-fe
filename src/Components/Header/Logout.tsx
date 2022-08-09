import React from "react";
import styled from "styled-components";
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
    const response = await fetch(`http://localhost:3000/auth/logout`, {
      method: "GET",
      credentials: "include",
    });
    const resp = await response.json();
    if (resp.ok) {
      dispatch(logout());
      navigate("/");
    }
    // console.log(resp);
    // axios
    //   .get(`http://localhost:3000/auth/logout`, {
    //     withCredentials: true,
    //   })
    //   .then((res: any) => {
    //     console.log(res);
    //   });
    // dispatch(logout());
    // navigate("/");
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
