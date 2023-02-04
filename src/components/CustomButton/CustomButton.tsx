import "./customButton.scss";

export interface CustomButtonInterface {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonInterface> = ({ title, type, disabled }) => {
  return (
    <button className={`custom-button ${disabled ? "disabled" : ""}`} type={type} disabled={disabled}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
