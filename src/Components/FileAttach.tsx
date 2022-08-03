import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FolderIco } from "../Assets/img/folder.svg";

const Container = styled.div`
  width: 400px;
  height: 60px;
  display: flex;

  background-color: var(--secondaryDark);
  & label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--secondaryF ontColor);
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
`;

function FileAttach() {
  const [files, setFile] = useState<FileList | null>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(files);
  }, [files]);
  return (
    <Container>
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
    </Container>
  );
}

export default FileAttach;
