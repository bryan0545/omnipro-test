import { Link } from "react-router-dom";
import { Carousel } from "../../components/CustomCarousel";
import { ProductFooter } from "../../components/ProductFooter";
import { ProductHeader } from "../../components/ProductHeader";
import { ProductInfo } from "../../components/ProductInfo";
import { produtsList } from "../../data/products";
import "./products.scss";

export interface ProductsInterface {}

const Products: React.FC<ProductsInterface> = () => {
  return (
    <div className="product__container">
      <ProductHeader />
      <Carousel autoPlay={false} showButtons={false} />
      <ProductInfo product={produtsList[0]} />
      <ProductFooter />
    </div>
  );
};

export default Products;
