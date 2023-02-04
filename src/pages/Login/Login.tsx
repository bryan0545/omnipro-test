import { localstorageKeys } from "../../constants/constants";
import { userInfo } from "../../models/userData";
import { loginUser } from "../../services/auth";
import { saveLocalStorageObj } from "../../utilities/localstorage";
import { TextInput, CheckInput, CustomButton, FormContainer, PublicHeader, WellcomeMessage } from "../../components/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PublicLayout } from "../../layouts/PublicLayout";
import "./login.scss";
import { SuccessPage } from "../../components/SuccessPage";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { useLogin } from "../../hooks/useLogin";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const { loadingRequest, formError, setFormError, success, login } = useLogin();
  const [checked, setChecked] = useState(false);
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError("");
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
  );
};

export default Login;
