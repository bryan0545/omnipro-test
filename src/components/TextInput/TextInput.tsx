import "./textInput.scss";
export interface TextInputInterface {
  placeholder?: string;
  type: string;
  name: string;
  value: string;
  error?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputInterface> = ({ error, errorMessage, ...rest }) => {
  return (
    <div className="text-input__container">
      <input className={`text-input ${error ? "error" : ""}`} {...rest} />
      {errorMessage && <span className={"error__message"}>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
