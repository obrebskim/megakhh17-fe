import React, { ChangeEvent } from "react";
import styled from "styled-components";
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

function RegisterTextTile({ text, onchange, actionName }: PropsTypes) {
  return (
    <Container>
      <textarea
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onchange({ type: actionName, payload: e.target.value })
        }
      />
    </Container>
  );
}

export default RegisterTextTile;
