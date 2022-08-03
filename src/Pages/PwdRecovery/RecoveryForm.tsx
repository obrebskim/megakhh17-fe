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
  const [resp, setResp] = useState("");

  const handleSubmitLoginForm = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/password/recovery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });

    const respData = await response.json();
    setResp(respData.message);
  };

  if (resp) {
    return <div> {resp}</div>;
  }
  return (
    <Container onSubmit={handleSubmitLoginForm}>
      <Input
        type="text"
        value={email}
        name="password"
        placeholder="Wpisz email"
        width="350px"
        height="40px"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <Button text="Wyślij" color="#E02735" />
    </Container>
  );
}
