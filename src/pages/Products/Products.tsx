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
      <Carousel product={produtsList[0]} />
      <ProductInfo product={produtsList[0]} />
      <ProductFooter />
    </div>
  );
};

export default Products;
