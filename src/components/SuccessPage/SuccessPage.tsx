import "./successPage.scss";

export interface SuccessPageInterface {
  title: string;
  backgroundImageUrl: string;
}

const SuccessPage: React.FC<SuccessPageInterface> = ({ title, backgroundImageUrl }) => {
  const splitedTitle = title.split(" ");
  const title1 = splitedTitle[0];
  const title2 = splitedTitle[1];
  console.log("splitedTitle", splitedTitle);

  return (
    <div className={`success-page ${title2 ? "double__paddin" : ""}`} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="success-page__container">
        <div className="success__Image">
          <img src="/images/LogoOmniWhite.svg" alt="Company logo" />
        </div>
        <div className="success__message">
          <span>{title1}</span>
          {splitedTitle.length > 1 && <span>{title2}</span>}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
