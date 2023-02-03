import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData, sizes } from "../../models/productData";
import { moneyFormat } from "../../utilities";
import { Badge } from "../Badge";
import { Counter } from "../Counter";
import { CustomButton } from "../CustomButton";
import { FavoriteButton } from "../FavoriteButton";
import SizeList from "../SizeList/SizeList";
import "./productInfo.scss";
export interface ProductInfoInterface {
  product: productData;
}

const ProductInfo: React.FC<ProductInfoInterface> = ({ product }) => {
  const [seletedSize, setSeletedSize] = useState<sizes>(product.sizes[0]);
  const [counter, setCounter] = useState(0);
  const sizes = product.sizes;

  return (
    <div className={"product-info__container"}>
      <div className={"product-info__header"}>
        <Badge title="NEW" />
        <FavoriteButton />
      </div>
      <div className={"product-info__title"}>
        <span>{product.name}</span>
      </div>
      <div className={"product-info__stars"}>
        <img src={`/images/stars.svg`} />
      </div>
      <div className={"product-info__prices"}>
        <span className={"product-info__price"}>${moneyFormat(product.price)}</span>
        <span className={"product-info__price discount"}>${moneyFormat(product.priceWithDiscount || 0)}</span>
      </div>
      <SizeList sizeList={sizes} seletedSize={seletedSize} onClick={setSeletedSize} />
      <div className={"product-info__actions"}>
        <div className={"product-info__counter"}>
          <Counter counter={counter} changeCounterValue={setCounter} />
        </div>
        <CustomButton title="Agregar al carrito" />
      </div>
      <div className={"product-info__description"}>
        <div className={"product-info__description-title"}>
          <span>DESCRIPCIÓN:</span>
        </div>
        <div className={"product-info__description-text"}>
          <span>{product.description}</span>
        </div>
        <div className={"read-more"}>
          <Link to="">Leer más</Link>
        </div>
      </div>
      <div className={"also-like"}>
        <span>TAMBIÉN TE PODRÍA GUSTAR</span>
      </div>
    </div>
  );
};

export default ProductInfo;
