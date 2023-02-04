import { moneyFormat } from "../../utilities/utilityFunctions";
import { smallProductData } from "../../models";
import "./carrouselItem.scss";

export interface CarrouselItemInterface {
  product: smallProductData;
}

const CarrouselItem: React.FC<CarrouselItemInterface> = ({ product }) => {
  return (
    <div className="carrousel-item__container">
      <div className="carrousel-item__image">
        <img src={`/images/${product.images[0]}`} alt={product.name} />
      </div>
      <div className="carrousel-item__name">
        <span>{product.name}</span>
      </div>
      <div className="carrousel-item__price">
        <span>{`$${moneyFormat(product.price)}`}</span>
      </div>
    </div>
  );
};

export default CarrouselItem;
