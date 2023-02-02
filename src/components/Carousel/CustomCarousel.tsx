import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { produtsList } from "../../pages/data/products";

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
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, product.images);
      }, 1000);
      return () => clearInterval(interval);
    }
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

  console.log("setSelectedIndex", selectedIndex);

  return (
    <>
      <img src={`/images/${selectedImage}`} alt="Gentleman" className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
      <div>
        {props.showButtons ? (
          <>
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        {product.images.map((image, index) => (
          <div key={index}>
            <button onClick={() => selectImageById(index, product.images)}>{index}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCarousel;
