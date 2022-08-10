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
  color: var(--fontColor);
  cursor: pointer;
`;

export default function Button({
  text,
  onClick,
  color,
  className,
}: PropsTypes) {
  return (
    <Container
      color={color}
      type="submit"
      onClick={onClick}
      className={className}
    >
      {text}
    </Container>
  );
}
