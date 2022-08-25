import React, { useContext } from "react";
import styled from "styled-components";
import { FilterFormContext } from "../../../Context/FilterFormContext";

interface PropsTypes {
  text: string;
  value: string;
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
  const { state, dispatch } = useContext(FilterFormContext);
  const handleButtonClick = () => {
    if (state.workplacePreference === "5") {
      dispatch({ type: "SET_WORKPLACE_PREFERENCE", payload: value });
    } else {
      const array = state.workplacePreference.split(",");
      if (array.includes(value)) {
        dispatch({
          type: "SET_WORKPLACE_PREFERENCE",
          payload: array.filter((el) => el !== value).join(),
        });
      } else if (value !== "5") {
        dispatch({
          type: "SET_WORKPLACE_PREFERENCE",
          payload: [...array, value].sort().join(),
        });
      }
    }
  };
  if (state.workplacePreference === "") {
    dispatch({
      type: "SET_WORKPLACE_PREFERENCE",
      payload: "5",
    });
  }
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
