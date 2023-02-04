import { sizes } from "../../models/productData";
import "./sizeList.scss";

export interface SizeListInterface {
  sizeList: string[];
  seletedSize: sizes;
  onClick: (size: sizes) => void;
}

const SizeList: React.FC<SizeListInterface> = ({ sizeList, seletedSize, onClick }) => {
  return sizeList ? (
    <div className="size-list">
      {sizeList.map((size, index) => (
        <div key={index} onClick={() => onClick(size as sizes)} className={`size-list__item ${seletedSize === size ? "seleted" : ""}`}>
          <span>{size}</span>
        </div>
      ))}
    </div>
  ) : null;
};

export default SizeList;
