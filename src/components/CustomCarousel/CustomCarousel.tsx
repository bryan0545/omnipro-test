import { useState } from "react";
import { productData } from "../../models";
import "./CustomCarousel.scss";

export interface CarouselInterface {
  product: productData;
}

const CustomCarousel: React.FC<CarouselInterface> = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const selectImageById = (index: number, images: string[]) => {
    setTimeout(() => {
      setSelectedImage(images[index]);
      setSelectedIndex(index);
    }, 200);
  };

  return (
    <>
      <div className="carousel__container">
        <img className="carousel__image" src={`/images/${selectedImage}`} alt={`Product ${selectedImage}`} />
        <div className="carousel__buttongroup-container">
          {product.images.map((_, index) => (
            <button
              key={index}
              className={`carousel__buttongroup ${index === selectedIndex ? "active" : ""}`}
              onClick={() => selectImageById(index, product.images)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomCarousel;
