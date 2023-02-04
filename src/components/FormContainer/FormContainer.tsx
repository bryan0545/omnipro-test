import { PublicRoutes } from "../../models";
import { FormButtonGroup } from "../FormButtonGroup";
import { useLocation } from "react-router-dom";
import "./formContainer.scss";

export interface FormContainerInterface {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const FormContainer: React.FC<FormContainerInterface> = ({ title, children }) => {
  const { pathname } = useLocation();
  let primaryBtn = { title: "Ingreso", url: PublicRoutes.LOGIN };
  let secondaryBtn = { title: "Registro", url: PublicRoutes.REGISTER };
  if (PublicRoutes.REGISTER === pathname) {
    primaryBtn = { title: "Registro", url: PublicRoutes.REGISTER };
    secondaryBtn = { title: "Ingreso", url: PublicRoutes.LOGIN };
  }

  return (
    <div className="form__container">
      <FormButtonGroup primaryBtn={primaryBtn} secondaryBtn={secondaryBtn} />
      <div className="form__title">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
