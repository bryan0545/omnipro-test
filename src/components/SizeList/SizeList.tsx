import React from "react";
import "./sizeList.scss";
import { sizes } from "../../models/productData";

export interface SizeListInterface {
  sizeList: string[];
  seletedSize: sizes;
  onClick: (size: sizes) => void;
}

const SizeList: React.FC<SizeListInterface> = ({ sizeList, seletedSize, onClick }) => {
  return sizeList ? (
    <div className="size-list">
      {sizeList.map((size, index) => (
        <div onClick={() => onClick(size as sizes)} className={`size-list__item ${seletedSize === size ? "seleted" : ""}`}>
          <span key={index}>{size}</span>
        </div>
      ))}
    </div>
  ) : null;
};

export default SizeList;
