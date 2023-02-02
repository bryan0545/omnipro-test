import { localstorageKeys } from "../../constants/constants";
import { userInfo } from "../../models/userData";
import { loginUser } from "../../services/auth";
import { saveLocalStorageObj } from "../../utilities/localstorage";
import { TextInput, CheckInput } from "../../components/";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface LoginInterface {}

const login = async () => {
  const user = await (await loginUser()).json();
  const userData: userInfo = {
    name: "user.data.name",
    token: user.data.access_token,
  };

  saveLocalStorageObj(localstorageKeys.userInfo, userData);
};

const Login: React.FC<LoginInterface> = () => {
  const [checked, setChecked] = useState(false);
  const [formError, setFormError] = useState("");
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await (await loginUser()).json();
    if (res.status !== 200) {
      setFormError("Contraseña incorrecta");
    }
  };

  return (
    <div>
      <form onSubmit={login}>
        <TextInput value={loginForm["name"]} type="text" name="name" placeholder="Email o nombre de usuario" onChange={onChangeHandler} />
        <TextInput
          value={loginForm["password"]}
          type="password"
          name="password"
          placeholder="Ingresa contraseña"
          onChange={onChangeHandler}
          error={!!formError}
          errorMessage={formError}
        />
        <CheckInput label="Suscríbete al newsletter" checked={checked} onClick={() => setChecked(!checked)} />
        <button type="submit">Ingresa</button>
      </form>
      <div>
        <Link to="">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  );
};

export default Login;
