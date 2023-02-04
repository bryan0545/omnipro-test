import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { localstorageKeys } from "../constants/constants";
import { PrivateRoutes, userInfo } from "../models";
import { loginUser } from "../services/auth";
import { getLocalStorageObj, saveLocalStorageObj } from "../utilities";

export const useLogin = () => {
  const navigation = useNavigate();
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);
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

  const validateForm = () => {
    if (!!!loginForm.name || !!!loginForm.password) {
      setFormError("Por favor, diligencia los campos marcados");
      return false;
    }
    return true;
  };

  const validateCredentials = () => {
    const user = getLocalStorageObj(localstorageKeys.registeredUser);

    if (!user || user.name !== loginForm.name || user.password !== loginForm.password) {
      setFormError("Usuario o contraseña incorrectos");
      return false;
    }
    return true;
  };

  const redirectToSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      navigation(PrivateRoutes.PRODUCTS);
    }, 2000);
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!validateCredentials()) return;
    setLoadingRequest(true);
    try {
      const res = await (await loginUser(loginForm.name, loginForm.password)).json();
      if (res.status === 400) {
        setLoadingRequest(false);
        return setFormError("Contraseña incorrecta");
      }

      if (res.status > 299) {
        setLoadingRequest(false);
        return setFormError("Usuario o contraseña incorrectos");
      }

      const userData: userInfo = {
        name: loginForm.name,
        token: res.data.access_token,
      };

      saveLocalStorageObj(localstorageKeys.userInfo, userData);
      setLoadingRequest(false);
      redirectToSuccess();
    } catch (error) {
      setLoadingRequest(false);
      return setFormError("Algo salió mal, intentalo mas tarde");
    }
  };

  return {
    onChangeHandler,
    loadingRequest,
    setFormError,
    loginForm,
    formError,
    success,
    login,
  };
};
