import React from "react";
import "./customButton.scss";

export interface CustomButtonInterface {
  title: string;
}

const CustomButton: React.FC<CustomButtonInterface> = ({ title }) => {
  return (
    <button className="custom-button">
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
