import React, { FormEvent } from "react";
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

function HrCreator() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <h3>Dodaj konto HR:</h3>
      <label htmlFor="email">
        <p>E-mail</p>
        <input type="email" id="email" required placeholder="Wpisz e-mail" />
      </label>
      <label htmlFor="name">
        <p>Imię i nazwisko</p>
        <input
          type="text"
          id="name"
          required
          placeholder="Wpisz imię i nazwisko"
        />
      </label>
      <label htmlFor="company">
        <p>Firma</p>
        <input
          type="text"
          id="company"
          required
          placeholder="Wpisz nazwę firmy"
        />
      </label>
      <label htmlFor="limit">
        <p>Limit studentów</p>
        <input
          type="number"
          id="limit"
          required
          placeholder="Wpisz limit studentów"
          min={1}
          max={999}
        />
      </label>
      <button className="send" type="submit">
        Stwórz HR
      </button>
    </Container>
  );
}

export default HrCreator;
