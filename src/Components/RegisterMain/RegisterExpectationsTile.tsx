import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { UserAccountContextActionInterface } from "../../Types/UserAccountContextActionInterface";

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
  value: string | number;
  type: InputType;
  onchange: React.Dispatch<UserAccountContextActionInterface>;
  postfix?: string;
  title: string;
  actionName: string;
  options?: { value: number; label: string }[];
}

function RegisterExpectationsTile({
  value,
  type,
  postfix = "",
  onchange,
  title,
  actionName,
  options = [],
}: PropsTypes) {
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
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      )}
      {type === "text" && (
        <label htmlFor="input">
          <input
            type="text"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onchange({ type: actionName, payload: e.target.value })
            }
          />
          {postfix !== "" && <span>{postfix}</span>}
        </label>
      )}
    </Container>
  );
}

export default RegisterExpectationsTile;
