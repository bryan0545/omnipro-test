import { localstorageKeys } from "../../constants/constants";
import { userInfo } from "../../models/userData";
import { loginUser } from "../../services/auth";
import { saveLocalStorageObj } from "../../utilities/localstorage";
import { TextInput, CheckInput, CustomButton, FormContainer, PublicHeader, WellcomeMessage } from "../../components/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PublicLayout } from "../../layouts/PublicLayout";
import "./login.scss";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const [checked, setChecked] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [formError, setFormError] = useState("");
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

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadingRequest(true);
    e.preventDefault();
    const res = await (await loginUser()).json();
    if (res.status !== 200) {
      setLoadingRequest(false);
      setFormError("Contraseña incorrecta");
    }

    const userData: userInfo = {
      name: "user.data.name",
      token: res.data.access_token,
    };
    saveLocalStorageObj(localstorageKeys.userInfo, userData);
    setLoadingRequest(false);
  };

  return (
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
  );
};

export default Login;
