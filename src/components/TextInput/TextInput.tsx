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
    <div>
      <input {...rest} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
