import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";

const Container = styled.form`
  display: grid;
  place-items: end;
  & Button {
    padding: 7px;
    font-size: 10px;
  }
  & .link-to-pwd-recovery {
    margin-bottom: 10px;
    text-decoration: none;
    color: var(--fontColor);
    font-size: 10px;
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
    console.log("Logic for login to be defined");
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
        width="200px"
        height="25px"
        required
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        value={loginData.password}
        name="password"
        placeholder="Hasło"
        width="200px"
        height="25px"
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
