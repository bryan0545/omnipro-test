import React from "react";
import "./successPage.scss";

export interface SuccessPageInterface {
  title: string;
  backgroundImageUrl: string;
}

const SuccessPage: React.FC<SuccessPageInterface> = ({ title, backgroundImageUrl }) => {
  return (
    <div className="success__page" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="success__page-container">
        {/* <div className="success__Image"> */}
        <img src="/images/LogoOmniWhite.svg" alt="Company logo" />
        {/* </div> */}
        <div className="success__message">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
