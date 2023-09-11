import React from "react";

interface SumButtonProps {
  label: string;
  onClick: (e: any) => void;
  disabled: boolean;
  loading: boolean;
}

const SumButton: React.FC<SumButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <button className="sumButton" onClick={onClick} disabled={disabled}>
      {loading ? "calculating" : label}
    </button>
  );
};

export default SumButton;
