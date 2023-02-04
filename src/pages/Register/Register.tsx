import { useState } from "react";
import { TextInput } from "../../components";
import { PublicLayout } from "../../layouts/PublicLayout";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./register.scss";

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
    <PublicLayout titleForm="Completa tus datos para registrarte" backgroundImageUrl={"images/registerBackground.png"}>
      <form onSubmit={registerUser}>
        <div className="register__inputs">
          {inputs.map((input) => {
            const key = input.name as keyof typeof registerForm;
            return (
              <div key={input.id} className="register__input-container">
                <TextInput
                  value={registerForm[key]}
                  {...input}
                  onChange={onChangeHandler}
                  error={!!(formError && !registerForm[key])}
                  errorMessage={input.id === inputs.length && formError ? formError : ""}
                />
              </div>
            );
          })}
        </div>
        <div className="register__button">
          <CustomButton title="Regístrate" type="submit" />
        </div>
      </form>
    </PublicLayout>
  );
};

export default Register;
