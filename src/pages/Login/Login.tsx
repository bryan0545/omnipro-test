import { TextInput, CheckInput, CustomButton, FormContainer, PublicHeader, WellcomeMessage } from "../../components/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PublicLayout } from "../../layouts/PublicLayout";
import { SuccessPage } from "../../components/SuccessPage";
import { useLogin } from "../../hooks/useLogin";
import "./login.scss";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const { loadingRequest, formError, loginForm, onChangeHandler, success, login } = useLogin();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    console.log("!!loginForm.name", !!loginForm.name),
    (
      <>
        <PublicLayout titleForm="Ingresa con tus datos" backgroundImageUrl={"images/loginBackground.png"}>
          <form onSubmit={login}>
            <div className="login__inputs">
              <div className="form__input-container">
                <TextInput
                  value={loginForm["name"]}
                  type="text"
                  name="name"
                  placeholder="Email o nombre de usuario"
                  error={!!formError && !!!loginForm.name}
                  onChange={onChangeHandler}
                />
              </div>
              <TextInput
                value={loginForm["password"]}
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
                onChange={onChangeHandler}
                error={!!formError}
                errorMessage={formError}
                iconButtonUrl="/images/showPassword.svg"
                showPassword={showPassword}
                changeShowPassword={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="form__check-container">
              <CheckInput label="Suscríbete al newsletter" checked={checked} onClick={() => setChecked(!checked)} />
            </div>
            <div className="form__button-container">
              <CustomButton title="Ingresa" type="submit" disabled={loadingRequest} />
            </div>
          </form>
          <div className={"link__container"}>
            <Link className={"general__link"} to="">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </PublicLayout>
        {success && <SuccessPage title="Ingresando" backgroundImageUrl="/images/successLogin.png" />}
      </>
    )
  );
};

export default Login;
