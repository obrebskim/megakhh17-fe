import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import EditButton from "../Common/EditButton";
import { ContextActionInterface } from "../../Context/UserAccountContext";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  & .title {
    font-size: 1.4rem;
    color: var(--secondaryFontColor);
  }
  & label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input,
    & select {
      width: 100px;
      font-size: 1.6rem;
      &:disabled {
        background-color: var(--primaryDark);
        border: none;
        color: var(--fontColor);
        -moz-appearance: none;
        -webkit-appearance: none;
        opacity: 1;
      }
    }
  }
`;

type InputType = "select" | "number" | "text";

interface PropsTypes {
  value: string;
  type: InputType;
  onchange: React.Dispatch<ContextActionInterface>;
  postfix?: string;
  title: string;
  actionName: string;
}

function ExpectationsTile({
  value,
  type,
  postfix = "",
  onchange,
  title,
  actionName,
}: PropsTypes) {
  const [editable, setEditable] = useState<boolean>(false);
  return (
    <Container>
      <p className="title">{title}</p>
      {type === "select" && (
        <label htmlFor="select">
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              onchange({ type: actionName, payload: e.target.value })
            }
            name="select"
            id="select"
            disabled={!editable}
          >
            <option value="">Biuro</option>
            <option value="1">zdalnie</option>
          </select>
          <EditButton
            value={editable}
            onclick={() => setEditable((prev) => !prev)}
          />
        </label>
      )}
      {type === "text" && (
        <label htmlFor="input">
          <input
            type="text"
            disabled={!editable}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onchange({ type: actionName, payload: e.target.value })
            }
          />
          {postfix !== "" && <span>{postfix}</span>}
          <EditButton
            value={editable}
            onclick={() => setEditable((prev) => !prev)}
          />
        </label>
      )}
    </Container>
  );
}

export default ExpectationsTile;
