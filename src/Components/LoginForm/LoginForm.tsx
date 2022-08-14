import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";
import { selectUser } from "../../State/Store/store";
import { login } from "../../State/Slices/userSlice";
import { open } from "../../State/Slices/modalSlice";

const Container = styled.form`
  display: grid;
  place-items: end;
  & Button {
    width: 91px;
    height: 39px;
    font-size: 16px;
    font-family: Catamaran;
    line-height: 100%;
  }
  & .link-to-pwd-recovery {
    width: 130px;
    height: 23px;
    margin-bottom: 28px;
    text-decoration: none;
    color: var(--fontColor);
    font-size: 14px;
    letter-spacing: 0.7px;
    text-align: end;
  }
`;

interface LoginDataType {
  email: string;
  password: string;
}

export default function LoginForm() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.role === 1) {
      navigate("/admin");
    } else if (user.role === 2) {
      navigate("/students/list");
    } else if (user.role === 3) {
      navigate("/account");
    }
  }, [user.role, navigate]);

  const handleSubmitLoginForm = async (e: FormEvent) => {
    e.preventDefault();
    // await dispatch(login({ id: "123", logged: true, name: "Maciek", role: 2 }));
    // const response = await fetch(`http://localhost:3000/auth/login`, {
    // method: "POST",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({
    // email: loginData.email,
    // pwd: loginData.password,
    // }),
    // });
    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginData.email,
          pwd: loginData.password,
        }),
        credentials: "include",
      });

      const respData = await response.json();
      if (respData.error) {
        dispatch(open({ isOpen: true, message: respData.error }));
      }

      dispatch(
        login({
          id: respData.id,
          logged: true,
          fullName: respData.fullName,
          role: Number(respData.role),
        }),
      );
    } catch (err) {
      dispatch(
        open({
          isOpen: true,
          message: "Coś poszło nie tak! Spróbuj ponownie.",
        }),
      );
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container onSubmit={handleSubmitLoginForm}>
      <Input
        type="email"
        value={loginData.email}
        name="email"
        placeholder="E-mail"
        width="350px"
        height="40px"
        required
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        value={loginData.password}
        name="password"
        placeholder="Hasło"
        width="350px"
        height="40px"
        required
        handleInputChange={handleInputChange}
      />
      <Link to="/pwd-recovery" className="link-to-pwd-recovery">
        Zapomniałeś hasła?
      </Link>
      <Button text="Zaloguj się" color="#E02735" />
    </Container>
  );
}
