import { useState } from "react";
import { CheckInput, TextInput } from "../../components";

export interface RegisterInterface {}

const Register: React.FC<RegisterInterface> = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Nombre*",
    },
    {
      id: 2,
      type: "text",
      name: "lastname",
      placeholder: "Apellido*",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "E-mail*",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Contraseña*",
    },
  ];

  const validateForm = () => {
    for (const prop in registerForm) {
      const key = prop as keyof typeof registerForm;
      if (registerForm[key] === "") {
        return setFormError("Por favor, diligencia los campos marcados");
      }
    }
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        {inputs.map((input) => {
          const key = input.name as keyof typeof registerForm;
          return (
            <TextInput
              value={registerForm[key]}
              key={input.id}
              {...input}
              onChange={onChangeHandler}
              error={!!(formError && !registerForm[key])}
            />
          );
        })}
        {formError && <span>{formError}</span>}
        <button type="submit">Regístrate</button>
      </form>
    </div>
  );
};

export default Register;
