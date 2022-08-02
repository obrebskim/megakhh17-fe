import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
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

interface LoginDataType {
  password1: string;
  password2: string;
}

export default function ResetForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [password, setPassword] = useState<LoginDataType>({
    password1: "",
    password2: "",
  });
  const [resp, setResp] = useState("");
  const [error, setError] = useState("");

  const handleSubmitLoginForm = async (e: FormEvent) => {
    e.preventDefault();
    const { password1, password2 } = password;
    const { id, token } = params;
    if (password1 === password2) {
      const data = await fetch(`http://localhost:3000/password/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password1,
          password2,
          id,
          token,
        }),
      });
      const response = await data.json();
      setResp(response.message);
      setTimeout(() => navigate("/"), 3000);
    } else {
      // @TODO można to jakoś ostylować czy coś, pozostawiam wam :)
      setError("podane hasła nie są takie same");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handlePasswordReset = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  if (resp) {
    return <div> {resp}</div>;
  }
  return (
    <Container onSubmit={handleSubmitLoginForm}>
      <Input
        type="password"
        value={password.password1}
        name="password1"
        placeholder="Nowe hasło"
        width="350px"
        height="40px"
        required
        handleInputChange={handlePasswordReset}
      />
      <Input
        type="password"
        value={password.password2}
        name="password2"
        placeholder="Powtórz hasło"
        width="350px"
        height="40px"
        required
        handleInputChange={handlePasswordReset}
      />
      <Button text="Zmień hasło" color="#E02735" />
      {error && <div>{error}</div>}
    </Container>
  );
}
