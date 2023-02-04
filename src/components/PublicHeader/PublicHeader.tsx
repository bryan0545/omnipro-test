import "./publicHeader.scss";

export interface PublicHeaderInterface {}

const PublicHeader: React.FC<PublicHeaderInterface> = () => {
  return (
    <div className="public__header-container">
      <img className="compant-logo" src="/images/LogoOmniWhite.svg" alt="" />
      <img className="hand-logo" src="/images/handLogo.png" alt="" />
    </div>
  );
};

export default PublicHeader;
