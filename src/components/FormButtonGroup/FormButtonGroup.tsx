import { Link } from "react-router-dom";
import { FormButtonGroupInfo } from "../../models";
import "./formButtonGroup.scss";

export interface FormButtonGroupInterface {
  primaryBtn: FormButtonGroupInfo;
  secondaryBtn: FormButtonGroupInfo;
}

const FormButtonGroup: React.FC<FormButtonGroupInterface> = ({ primaryBtn, secondaryBtn }) => {
  return (
    <div className="form__button-group">
      <Link className="primary__button" to={primaryBtn.url} replace={true}>
        {primaryBtn.title}
      </Link>

      <Link className="secondary__button" to={secondaryBtn.url} replace={true}>
        {secondaryBtn.title}
      </Link>
    </div>
  );
};

export default FormButtonGroup;
