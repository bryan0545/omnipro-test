import { useEffect, useState } from "react";
import { produtsList } from "../../data/products";
import "./CustomCarousel.scss";

export interface CarouselInterface {
  autoPlay?: boolean;
  showButtons?: boolean;
}

const CustomCarousel: React.FC<CarouselInterface> = ({ ...props }) => {
  const product = produtsList[0];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // if (props.autoPlay || !props.showButtons) {
    //   const interval = setInterval(() => {
    //     selectNewImage(selectedIndex, product.images);
    //   }, 1500);
    //   return () => clearInterval(interval);
    // }
  });

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 200);
  };

  const selectImageById = (index: number, images: string[]) => {
    setLoaded(false);
    setTimeout(() => {
      setSelectedImage(images[index]);
      setSelectedIndex(index);
    }, 200);
  };

  const previous = () => {
    selectNewImage(selectedIndex, product.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, product.images);
  };

  return (
    <>
      <div className="carousel__container">
        <img className="carousel__image" src={`/images/${selectedImage}`} alt={`Product ${selectedImage}`} onLoad={() => setLoaded(true)} />
        <div className="carousel__buttongroup-container">
          {product.images.map((image, index) => (
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
