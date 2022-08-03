import React from "react";
import styled from "styled-components";

interface PropsTypes {
  text: string;
  value?: boolean;
  color?: string;
  className?: string;
  handleClick: (status: boolean) => void;
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

export default function PreferenceButton({
  text,
  value,
  color,
  className,
  handleClick,
}: PropsTypes) {
  const handleButtonClick = () => {
    if (!value) {
      handleClick(true);
    } else {
      handleClick(false);
    }
  };
  return (
    <Container
      color={value ? "#E02735" : color}
      type="button"
      className={className}
      onClick={handleButtonClick}
    >
      {text}
    </Container>
  );
}
