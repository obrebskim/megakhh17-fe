import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Common/Button/Button";
import Input from "../../Components/Common/Input/Input";

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

export default function RecoveryForm() {
  const [email, setEmail] = useState<string>("");

  const handleSubmitLoginForm = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/password/recovery`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    const userInfo = await response.json();
    console.log(userInfo);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container onSubmit={handleSubmitLoginForm}>
      <Input
        type="text"
        value={email}
        name="password"
        placeholder="Hasło"
        width="350px"
        height="40px"
        required
        handleInputChange={handleInputChange}
      />

      <Button text="Wyślij" color="#E02735" />
    </Container>
  );
}
