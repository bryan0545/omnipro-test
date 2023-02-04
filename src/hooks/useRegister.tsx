import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { localstorageKeys } from "../constants/constants";
import { PublicRoutes, userInfo } from "../models";
import { createUser } from "../services/auth";
import { saveLocalStorageObj } from "../utilities";

export const useRegister = () => {
  const navigation = useNavigate();
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

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
        setFormError("Por favor, diligencia los campos marcados");
        return false;
      }
    }
    return true;
  };

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoadingRequest(true);
    try {
      const res = await (await createUser()).json();
      if (res.status !== 201) {
        setLoadingRequest(false);
        return setFormError("Algo salió mal, intentalo mas tarde");
      }

      const userData: userInfo = {
        name: registerForm.name,
        password: registerForm.password,
      };
      saveLocalStorageObj(localstorageKeys.registeredUser, userData);
      setLoadingRequest(false);

      setSuccess(true);
      setTimeout(() => {
        navigation(PublicRoutes.LOGIN);
      }, 2000);
    } catch {
      setLoadingRequest(false);
      setFormError("Algo salió mal, intentalo mas tarde");
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return {
    inputs,
    registerForm,
    formError,
    loadingRequest,
    success,
    registerUser,
    onChangeHandler,
  };
};
