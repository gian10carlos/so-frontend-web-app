import React from "react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, type }) => {
  return <input
    className="w-full p-2 border-2 rounded-md"
    type={type}
    value={value}
    onChange={onChange}
  />;
};

export default CustomInput;