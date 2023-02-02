import { Link } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import { produtsList, alsoLike } from "../data/products";

export interface ProductsInterface {}

const Products: React.FC<ProductsInterface> = () => {
  const product = produtsList[0];
  const sizes = product.sizes;
  return (
    <div>
      {/* <Carousel autoPlay={false} showButtons={true} /> */}
      <img src={`/images/${product.images[0]}`} />
      <div>
        <span>{product.name}</span>
      </div>
      <img src={`/images/stars.svg`} />
      <div>
        <span>{product.price}</span>
        <span>{product.priceWithDiscount}</span>
      </div>
      <div>
        {sizes?.map((size, index) => (
          <span key={index}>{size}</span>
        ))}
      </div>
      <div>
        <span>counter</span>
        <button>Agregar al carrito</button>
      </div>
      <div>
        <span>DESCRIPCIÓN:</span>
        <span>{product.description}</span>
        <Link to="">Leer más</Link>
      </div>
      <div>
        <span>TAMBIÉN TE PODRÍA GUSTAR</span>
      </div>
    </div>
  );
};

export default Products;
