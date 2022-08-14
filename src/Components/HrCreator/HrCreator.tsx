import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  padding: 20px;
  background-color: var(--secondaryDark);
  display: flex;
  flex-direction: column;
  gap: 20px;
  & label {
    width: 400px;
    & input {
      height: 40px;
      width: 400px;
      padding-left: 20px;
      background-color: var(--primaryDark);
      border: none;
      color: var(--fontColor);
      &:focus {
        background-color: var(--fontColor);
        color: var(--primaryDark);
      }
      &:invalid {
        outline: 2px solid var(--buttonColor);
      }
    }
    & p {
      padding-left: 20px;
      font-size: 1.4rem;
      color: #777777;
    }
  }
  & .send {
    height: 40px;
    width: 100px;
    border: none;
    background-color: var(--buttonColor);
    color: var(--fontColor);
  }
`;

export interface SetHrsDataType {
  email: string;
  pwd: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
}

function HrCreator() {
  const [hrsData, setHrsData] = useState<SetHrsDataType>({
    email: "",
    pwd: "",
    fullName: "",
    company: "",
    maxReservedStudents: 0,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(hrsData);

    const response = await fetch(`http://localhost:3000/hrs/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: hrsData.email,
        pwd: hrsData.pwd,
        fullName: hrsData.fullName,
        company: hrsData.company,
        maxReservedStudents: hrsData.maxReservedStudents,
      }),
      credentials: "include",
    });

    const respData = await response.json();
    console.log(respData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHrsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <h3>Dodaj konto HR:</h3>
      <label htmlFor="email">
        <p>E-mail</p>
        <input
          type="email"
          id="email"
          required
          name="email"
          placeholder="Wpisz e-mail"
          value={hrsData.email}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="password">
        <p>Hasło:</p>
        <input
          type="password"
          id="password"
          required
          name="pwd"
          placeholder="Wpisz hasło"
          value={hrsData.pwd}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="name">
        <p>Imię i nazwisko</p>
        <input
          type="text"
          id="name"
          required
          name="fullName"
          placeholder="Wpisz imię i nazwisko"
          value={hrsData.fullName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="company">
        <p>Firma</p>
        <input
          type="text"
          id="company"
          required
          name="company"
          placeholder="Wpisz nazwę firmy"
          value={hrsData.company}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="limit">
        <p>Limit studentów</p>
        <input
          type="number"
          id="limit"
          required
          placeholder="Wpisz limit studentów"
          value={hrsData.maxReservedStudents}
          min={1}
          name="maxReservedStudents"
          max={999}
          onChange={handleInputChange}
        />
      </label>
      <button className="send" type="submit">
        Stwórz HR
      </button>
    </Container>
  );
}

export default HrCreator;
