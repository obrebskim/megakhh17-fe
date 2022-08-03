import React, { ChangeEvent } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 15px;
  padding-left: 10px;
  color: var(--fontColor);
  background-color: var(--secondaryDark);
  border: none;
  border-radius: 2px;
  font-size: 16px;
`;

interface Props {
  type: string;
  value: string;
  name?: string;
  placeholder: string;
  width?: string;
  height?: string;
  required?: boolean;
  min?: number;
  // ref?: MutableRefObject<null>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  value,
  name = "",
  placeholder,
  width = "150px",
  height = "30px",
  required = false,
  min = 0,
  // ref,
  handleInputChange,
}: Props) {
  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      style={{ width, height }}
      placeholder={placeholder}
      required={required}
      onChange={handleInputChange}
      min={min}
      // ref={ref}
    />
  );
}
