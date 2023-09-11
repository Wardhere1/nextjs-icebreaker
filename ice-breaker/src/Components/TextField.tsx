import React from "react";

interface TextFieldProps {
  value: number | "";
  onChange: (value: number | string) => void;
  isValid: boolean;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  // type,
  // error,
  isValid,
}) => {
  const borderColor = isValid ? "green" : "blue";

  return (
    <input
      className="text-field-container"
      type="number"
      placeholder="Enter number 1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ borderColor }}
    ></input>
  );
};

export default TextField;
