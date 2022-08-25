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

export default function ContractPreferenceButton({
  text,
  value,
  color,
  className,
}: PropsTypes) {
  const { state, dispatch } = useContext(FilterFormContext);
  const handleButtonClick = () => {
    if (state.contractPreference === "4") {
      dispatch({ type: "SET_CONTRACT_PREFERENCE", payload: value });
    } else {
      const array = state.contractPreference.split(",");
      if (array.includes(value)) {
        dispatch({
          type: "SET_CONTRACT_PREFERENCE",
          payload: array.filter((el) => el !== value).join(),
        });
      } else if (value !== "4") {
        dispatch({
          type: "SET_CONTRACT_PREFERENCE",
          payload: [...array, value].sort().join(),
        });
      }
    }
  };
  if (state.contractPreference === "") {
    dispatch({
      type: "SET_CONTRACT_PREFERENCE",
      payload: "4",
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
