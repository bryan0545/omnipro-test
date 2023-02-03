import React from "react";
import "./favoriteButton.scss";
export interface FavoriteButtonInterface {}

const FavoriteButton: React.FC<FavoriteButtonInterface> = () => {
  return (
    <button className="favorite-button">
      <img src="/images/favorite.svg" />
    </button>
  );
};

export default FavoriteButton;
