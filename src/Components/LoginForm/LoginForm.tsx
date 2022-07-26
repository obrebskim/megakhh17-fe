import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";

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
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const handleSubmitLoginForm = (e: FormEvent) => {
    e.preventDefault();
    // console.log("Logic for login to be defined");
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
