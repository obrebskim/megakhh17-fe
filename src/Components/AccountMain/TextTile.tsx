import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import EditButton from "../Common/EditButton/EditButton";
import { UserAccountContextActionInterface } from "../../Types/UserAccountContextActionInterface";

const Container = styled.div`
  display: flex;
  align-items: end;
  padding: 10px;
  & textarea {
    resize: none;
    width: 100%;
    min-height: 80px;
    padding: 10px;
    &:disabled {
      background-color: var(--primaryDark);
      border: none;
      color: var(--fontColor);
    }
  }
`;

interface PropsTypes {
  text: string;
  onchange: React.Dispatch<UserAccountContextActionInterface>;
  actionName: string;
}

function TextTile({ text, onchange, actionName }: PropsTypes) {
  const [editable, setEditable] = useState<boolean>(false);
  return (
    <Container>
      <textarea
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onchange({ type: actionName, payload: e.target.value })
        }
        disabled={!editable}
      />
      <EditButton
        value={editable}
        onclick={() => setEditable((prev) => !prev)}
      />
    </Container>
  );
}

export default TextTile;
