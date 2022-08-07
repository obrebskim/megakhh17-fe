import React, { useContext } from "react";
import styled from "styled-components";
import FilterFormContext from "../../../utils/FilterFormContext";

interface PropsTypes {
  text: string;
  value?: number;
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
  const context = useContext(FilterFormContext);

  if (!context) return null;

  const { setWorkplacePreference } = context;
  const handleButtonClick = () => {
    switch (value) {
      case 1:
        return setWorkplacePreference(1);
      case 2:
        return setWorkplacePreference(2);
      case 3:
        return setWorkplacePreference(3);
      case 4:
        return setWorkplacePreference(4);
      case 5:
        return setWorkplacePreference(5);
      default:
        return setWorkplacePreference(5);
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
