import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { ReactComponent as PhoneIco } from "../../Assets/img/phone.svg";
import { ReactComponent as MailIco } from "../../Assets/img/mail.svg";
import EditButton from "../Common/EditButton/EditButton";
import { UserAccountContext } from "../../Context/UserAccountContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Wrapper = styled.div`
  height: 26px;
  display: grid;
  align-items: center;
  grid-template-columns: 25px auto 25px;
  & svg {
    width: 15px;
  }
  & a {
    color: var(--fontColor);
    text-decoration: none;
  }
  & input:disabled {
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    color: var(--fontColor);
  }
  & input[pattern]:invalid {
    outline: 2px solid var(--buttonColor);
  }
`;

function ContactTile() {
  const { state, dispatch } = useContext(UserAccountContext);
  const [phone, setPhone] = useState<string>(state.tel);
  const [email, setEmail] = useState<string>(state.email);
  const [isPhoneEditable, setIsPhoneEditable] = useState<boolean>(false);
  const [isEmailEditable, setIsEmailEditable] = useState<boolean>(false);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (phoneRef.current !== null) {
      setIsPhoneValid(phoneRef.current.validity.valid);
    }
  }, [phone]);
  useEffect(() => {
    if (emailRef.current !== null) {
      setIsEmailValid(emailRef.current.validity.valid);
    }
  }, [email]);

  const handlePhoneChange = () => {
    if (isPhoneValid && isPhoneEditable) {
      dispatch({ type: "SET_PHONE", payload: phone });
      setIsPhoneEditable(false);
    } else if (!isPhoneEditable) {
      setIsPhoneEditable(true);
    }
  };

  const handleEmailChange = () => {
    if (isEmailValid && isEmailEditable) {
      dispatch({ type: "SET_EMAIL", payload: email });
      setIsEmailEditable(false);
    } else if (!isEmailEditable) {
      setIsEmailEditable(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <PhoneIco />
        <input
          type="text"
          pattern="[+][0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}"
          placeholder="numer telefonu"
          title="Prawidłowy format numeru to +48 111 111 111"
          ref={phoneRef}
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          disabled={!isPhoneEditable}
        />
        <EditButton value={isPhoneEditable} onclick={handlePhoneChange} />
      </Wrapper>
      <Wrapper>
        <MailIco />
        <input
          type="email"
          placeholder="adres e-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          title="Prawidłowy format e-mail kowalski@domena.pl."
          ref={emailRef}
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={!isEmailEditable}
        />
        <EditButton value={isEmailEditable} onclick={handleEmailChange} />
      </Wrapper>
    </Container>
  );
}

export default ContactTile;
