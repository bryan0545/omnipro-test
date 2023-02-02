import React from "react";
export interface CheckInputInterface {
  label?: string;
  checked: boolean;
  onClick: () => void;
}

const CheckInput: React.FC<CheckInputInterface> = ({ label, checked, onClick }) => {
  return (
    <label className="container">
      <input readOnly type="radio" checked={checked} name="radio" onClick={onClick} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CheckInput;
