import styled from "styled-components";
import { useContext } from "react";
import { UserRegisterContext } from "../../Context/UserRegisterContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & input {
    height: 30px;
    padding-left: 10px;
    background-color: var(--primaryDark);
    border: none;
    font-size: 1.4rem;
    color: var(--fontColor);
    &:focus {
      background-color: #fff;
      color: var(--primaryDark);
    }
  }
  & input[pattern]:invalid {
    outline: 2px solid var(--buttonColor);
  }
`;

function ContactTile() {
  const { state, dispatch } = useContext(UserRegisterContext);
  return (
    <Container>
      <h3>Dane kontaktowe</h3>
      <input
        type="text"
        placeholder="Imię"
        name="firstName"
        value={state.firstName}
        onChange={(e) =>
          dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Nazwisko"
        name="lastName"
        value={state.lastName}
        onChange={(e) =>
          dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Login Github"
        name="githubUsername"
        value={state.githubUsername}
        onChange={(e) =>
          dispatch({ type: "SET_GITHUB_USERNAME", payload: e.target.value })
        }
      />

      <input
        type="text"
        pattern="[+][0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}"
        placeholder="Numer telefonu"
        title="Prawidłowy format numeru to +48 111 111 111"
        value={state.tel}
        onChange={(e) => dispatch({ type: "SET_TEL", payload: e.target.value })}
      />

      <input
        type="email"
        placeholder="Adres e-mail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
        title="Prawidłowy format e-mail kowalski@domena.pl."
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
    </Container>
  );
}

export default ContactTile;
