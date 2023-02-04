export interface Page404Interface {}
import "./page404.scss";

const Page404: React.FC<Page404Interface> = () => {
  return (
    <div className="page404__container" style={{ backgroundImage: `url(/images/successLogin.png)` }}>
      <img src="/images/LogoOmniWhite.svg" alt="" />
      <span>Error 404</span>
      <span>Page not Found</span>
    </div>
  );
};

export default Page404;
