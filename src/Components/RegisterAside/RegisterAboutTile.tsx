import styled from "styled-components";
import { useContext } from "react";
import { UserRegisterContext } from "../../Context/UserRegisterContext";

const Container = styled.div`
  width: 100%;
  & textarea {
    resize: none;
    width: 100%;
    min-height: 250px;
    text-align: justify;
    background-color: var(--primaryDark);
    border: none;
    color: var(--fontColor);
    &:focus {
      background-color: #fff;
      color: var(--primaryDark);
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
  const { state, dispatch } = useContext(UserRegisterContext);
  return (
    <Container>
      <Wrapper>
        <h3>O mnie</h3>
      </Wrapper>
      <textarea
        value={state.bio}
        onChange={(e) => dispatch({ type: "SET_BIO", payload: e.target.value })}
      />
    </Container>
  );
}

export default AboutTile;
