import React, {ChangeEvent} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: #c2c0c0;
  background-color: #2f2f2f;
  border-radius: 2px;
`;

interface Props {
    type: string;
    placeholder: string;
    width: string;
    height: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => (
    <StyledInput
        type={props.type}
        style={{width: props.width, height: props.height}}
        placeholder={props.placeholder}
        onChange={props.handleInputChange}
    />
);
