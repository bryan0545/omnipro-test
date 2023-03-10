import "./productHeader.scss";

export interface ProductHeaderInterface {}

const ProductHeader: React.FC<ProductHeaderInterface> = () => {
  return (
    <div className="product__header">
      <button className="product__burger-button">
        <img src="/images/burgerBtn.svg" alt="Burger button icon" />
      </button>
      <div className="product__logo">
        <div className="product__logo2">
          <img src="/images/LogoOmni.svg" alt="Company logo" />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
