import React from "react";

interface TextFieldProps {
  label: string;
  value: number | "";
  onChange: (value: number) => void;
  // error: boolean;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  type,
  // error,
}) => {
  return (
    <div className="text-field-container">
      <label>{label}</label>
      <input
        type="number"
        placeholder="Enter number 1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
    </div>
  );
};

export default TextField;
