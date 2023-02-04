import "./textInput.scss";
export interface TextInputInterface {
  placeholder?: string;
  type: string;
  name: string;
  value: string;
  error?: boolean;
  errorMessage?: string;
  iconButtonUrl?: string;
  showPassword?: boolean;
  changeShowPassword?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputInterface> = ({
  error,
  errorMessage,
  iconButtonUrl,
  showPassword,
  changeShowPassword,
  type,
  ...rest
}) => {
  type = showPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="text-input__container">
      <input className={`text-input ${error ? "error" : ""}`} type={type} {...rest} />
      {!!iconButtonUrl && (
        <button onClick={changeShowPassword} className="text-input__button" type="button">
          <img src={iconButtonUrl} alt="" />
        </button>
      )}
      {errorMessage && <span className={"error__message"}>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
