import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FolderIco } from "../../Assets/img/folder.svg";
import { open } from "../../State/Slices/modalSlice";

const Container = styled.form`
  width: 100%;
  display: grid;
  grid-template-rows: 40px 40px 40px;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  background-color: var(--secondaryDark);

  & label {
    width: 400px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--secondaryFontColor);
    background-color: var(--primaryDark);
    & input {
      display: none;
    }
    & button {
      height: 100%;
      width: 80px;
      background-color: transparent;
      border: none;
      & svg {
        width: 25px;
      }
    }
    & span {
      width: 100%;
    }
  }
  & .send {
    width: 100px;
    border: none;
    background-color: var(--buttonColor);
    color: var(--fontColor);
  }
`;

function FileAttach() {
  const [files, setFile] = useState<FileList | null>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleSendFile = async (e: FormEvent) => {
    e.preventDefault();
    if (!files) return console.log("Plik nie został wybrany.");
    try {
      const formData = new FormData();
      formData.append("file", files[0]);
      await fetch("http://localhost:3001/file", {
        method: "POST",
        body: formData,
      });
      return open({
        isOpen: true,
        message: "Dane zostały zapisane.",
      });
    } catch (err) {
      return open({
        isOpen: true,
        message: "Coś poszło nie tak! Spróbuj ponownie.",
      });
    }
  };

  return (
    <Container onSubmit={(e) => handleSendFile(e)}>
      <h3>Importuj listę studentów:</h3>
      <label htmlFor="file-csv">
        <input
          type="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files)
          }
          id="file-csv"
          ref={inputFile}
          accept=".csv"
          title="Plik musi być plikiem rozszerzenie .csv"
        />
        <button type="button">
          <FolderIco />
        </button>
        <span>{files ? files[0].name : "wybierz plik .csv"}</span>
      </label>
      <button className="send" type="submit">
        Wyślij
      </button>
    </Container>
  );
}

export default FileAttach;
