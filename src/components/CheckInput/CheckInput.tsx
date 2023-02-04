import "./checkInput.scss";
export interface CheckInputInterface {
  label?: string;
  checked: boolean;
  onClick: () => void;
}

const CheckInput: React.FC<CheckInputInterface> = ({ label, checked, onClick }) => {
  return (
    <label className="check-input__container">
      <input className="check-input__check" readOnly type="radio" checked={checked} name="radio" onClick={onClick} />
      <span className="checkmark">{label}</span>
    </label>
  );
};

export default CheckInput;
