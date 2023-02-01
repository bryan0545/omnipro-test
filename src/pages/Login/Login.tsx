import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { localstorageKeys } from "../../constants/constants";
import { userInfo } from "../../models/userData";
import { loginUser, createUser } from "../../services/auth";
import { getLocalStorageObj, saveLocalStorageObj } from "../../utilities/localstorage";
import { PrivateRoutes } from "../../models/routes";

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
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
