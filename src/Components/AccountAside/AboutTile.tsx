import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import EditButton from "../Common/EditButton/EditButton";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.div`
  width: 100%;
  & textarea {
    resize: none;
    width: 100%;
    min-height: 250px;
    text-align: justify;
    &:disabled {
      background-color: transparent;
      border: none;
      color: var(--fontColor);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h3 {
    color: var(--tirnaryFontColor);
  }
`;

function AboutTile() {
  const { state, dispatch } = useContext(UserAccountContext);
  const [about, setAbout] = useState<string>(state.bio);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const handleAboutChange = () => {
    if (isEditable) {
      dispatch({ type: "SET_BIO", payload: about });
      setIsEditable(false);
    } else if (!isEditable) {
      setIsEditable(true);
    }
  };
  return (
    <Container>
      <Wrapper>
        <h3>O mnie</h3>
        <EditButton value={isEditable} onclick={handleAboutChange} />
      </Wrapper>
      <textarea
        value={about}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setAbout(e.target.value)
        }
        onBlur={() => setAbout(state.bio)}
        disabled={!isEditable}
      />
    </Container>
  );
}

export default AboutTile;
