import React, {ChangeEvent} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  color: var(--fontColor);
  background-color: var(--secondaryDark);
  border-radius: 2px;
`;

interface Props {
    type: string;
    placeholder: string;
    width?: string;
    height?: string;
    required?: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
    const {type, placeholder, width = '150px', height = '30px', required = false, handleInputChange} = props;

    return (
        <StyledInput
            type={type}
            style={{width, height}}
            placeholder={placeholder}
            required={required}
            onChange={handleInputChange}
        />
    );
}
