import { TextInput, CustomButton, SuccessPage } from "../../components";
import { PublicLayout } from "../../layouts/PublicLayout";
import { useRegister } from "../../hooks/useRegister";
import "./register.scss";

export interface RegisterInterface {}

const Register: React.FC<RegisterInterface> = () => {
  const { registerUser, inputs, registerForm, onChangeHandler, formError, loadingRequest, success } = useRegister();
  return (
    <>
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
            <CustomButton title="Regístrate" type="submit" disabled={loadingRequest} />
          </div>
        </form>
      </PublicLayout>
      {success && <SuccessPage title="Registro completo" backgroundImageUrl="/images/successRegister.png" />}
    </>
  );
};

export default Register;
