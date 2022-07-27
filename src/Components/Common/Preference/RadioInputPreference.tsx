import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  name: string;
  required?: boolean;
  text: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInputPreference({
  value,
  name,
  required,
  text,
  handleInputChange,
}: Props) {
  return (
    <label htmlFor={name}>
      <input
        id={name}
        type="radio"
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
      />
      {text}
    </label>
  );
}
