import React from "react";
import { FormContainer, PublicHeader, WellcomeMessage } from "../../components";
export interface PublicLayoutInterface {
  titleForm: string;
  backgroundImageUrl: string;
  children: React.ReactNode | React.ReactNode[];
}

const PublicLayout: React.FC<PublicLayoutInterface> = ({ children, titleForm, backgroundImageUrl }) => {
  return (
    <div className="login__page" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <PublicHeader />
      <div className="login__message-container">
        <WellcomeMessage />
      </div>
      <div className="login__form-container">
        <FormContainer title={titleForm}>{children}</FormContainer>
      </div>
    </div>
  );
};

export default PublicLayout;
