import React from "react";
import "./productFooter.scss";

export interface ProductFooterInterface {}

const ProductFooter: React.FC<ProductFooterInterface> = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__newsletter">
        <span>Newsletter</span>
      </div>
      <div className="footer-container__copyright">
        <span>Todos los derechos reservados</span>
        <span>2023</span>
        <span>Omnishop</span>

        <img src="/images/LogoOmni.svg" alt="" />
      </div>
    </div>
  );
};

export default ProductFooter;
