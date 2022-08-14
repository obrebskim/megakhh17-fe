import React, { useContext } from "react";
import styled from "styled-components";
import { FilterFormContext } from "../../../Context/FilterFormContext";

interface PropsTypes {
  text: string;
  value?: string;
  color?: string;
  className?: string;
}

const Container = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  margin-right: 8px;
  padding: 4px 10px;
  color: var(--fontColor);
  font-size: 12px;
  cursor: pointer;
`;

export default function WorkplacePreferenceButton({
  text,
  value,
  color,
  className,
}: PropsTypes) {
  const { dispatch } = useContext(FilterFormContext);
  const handleButtonClick = () => {
    switch (value) {
      case "1":
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "1" });
      case "2":
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "2" });
      case "3":
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "3" });
      case "4":
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "4" });
      case "5":
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "5" });
      default:
        return dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: "5" });
    }
  };
  return (
    <Container
      color={color}
      type="button"
      className={className}
      onClick={handleButtonClick}
    >
      {text}
    </Container>
  );
}
