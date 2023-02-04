import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { localstorageKeys } from "../constants/constants";
import { PrivateRoutes, userInfo } from "../models";
import { loginUser } from "../services/auth";
import { saveLocalStorageObj } from "../utilities";

export const useLogin = () => {
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigation = useNavigate();

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
    setSuccess(true);
    setTimeout(() => {
      navigation(PrivateRoutes.PRODUCTS);
    }, 2000);
  };

  return {
    loadingRequest,
    setFormError,
    formError,
    success,
    login,
  };
};
