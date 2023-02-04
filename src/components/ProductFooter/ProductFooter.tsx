import "./productFooter.scss";

export interface ProductFooterInterface {}

const ProductFooter: React.FC<ProductFooterInterface> = () => {
  return (
    <div className="footer-container">
      <div className="footer-newsletter__container">
        <span>Newsletter</span>
      </div>
      <div className="footer-copyright__container">
        <span>Todos los derechos reservados</span>
        <span>2023</span>
        <span>Omnishop</span>

        <img src="/images/LogoOmni.svg" alt="Company logo" />
      </div>
    </div>
  );
};

export default ProductFooter;
