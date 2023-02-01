import { Navigate, Outlet } from "react-router-dom";
import { localstorageKeys } from "../../constants/constants";
import { PublicRoutes, userInfo } from "../../models";
import { getLocalStorageObj } from "../../utilities/localstorage";

export const AuthGuard = () => {
  const user: userInfo = getLocalStorageObj(localstorageKeys.userInfo);
  return user?.token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
