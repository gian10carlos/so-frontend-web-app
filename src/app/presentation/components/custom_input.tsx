import React from "react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, type, placeholder, className }) => {
  return <input
    className={`w-full focus:outline-none ${className}`}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />;
};

export default CustomInput;