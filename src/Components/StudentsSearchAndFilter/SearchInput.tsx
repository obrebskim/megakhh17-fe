import React from "react";
import styled from "styled-components";
import magnifyerImg from "../../Assets/img/magnifying-glass.svg";

interface PropsTypes {
  value: string;
  onchange: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.label`
  height: 39px;
  width: 365px;
  background-color: var(--headerBackground);
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  & img {
    width: 15px;
  }
  & input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    color: var(--fontColor);
    font-weight: 400;
    &::placeholder {
      color: var(--placeholderColor);
    }
    &:focus {
      outline: none;
    }
  }
`;

function SearchInput({ value, onchange }: PropsTypes) {
  return (
    <Container htmlFor="search">
      <img src={magnifyerImg} alt="" />
      <input
        type="text"
        placeholder="Szukaj"
        name="search"
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </Container>
  );
}

export default SearchInput;
