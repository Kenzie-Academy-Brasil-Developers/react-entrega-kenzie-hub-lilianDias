import React from "react";
import { StyledInput } from "./input";

export const Input = ({ id, label, type, register, placeholder, disabled }) => {
  return (
    <StyledInput>
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register}
        />
      </>
    </StyledInput>
  );
};

export const Select = ({
  id,
  label,
  type,
  register,
  placeholder,
  disabled,
  options,
}) => {
  return (
    <StyledInput>
      <>
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    </StyledInput>
  );
};
