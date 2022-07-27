import React from "react";
import styled from "styled-components";

interface PropsTypes {
  text: string;
  onClick?: () => void;
  color: string;
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

export default function PreferenceButton({
  text,
  onClick,
  color,
  className,
}: PropsTypes) {
  return (
    <Container
      color={color}
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </Container>
  );
}
