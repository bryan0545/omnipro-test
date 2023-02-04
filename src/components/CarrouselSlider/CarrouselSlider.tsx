import Carousel from "react-multi-carousel";
import { CarrouselItem } from "../";
import { smallProductData } from "../../models";
import "react-multi-carousel/lib/styles.css";

export interface CarrouselSliderInterface {
  products: smallProductData[];
}

const CarrouselSlider: React.FC<CarrouselSliderInterface> = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 1024 },
      items: 2.2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.25,
    },
  };
  return (
    <Carousel responsive={responsive} arrows={false}>
      {products.map((product, index) => (
        <CarrouselItem key={index} product={product} />
      ))}
    </Carousel>
  );
};

export default CarrouselSlider;
