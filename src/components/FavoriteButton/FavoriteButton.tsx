import "./favoriteButton.scss";

export interface FavoriteButtonInterface {}

const FavoriteButton: React.FC<FavoriteButtonInterface> = () => {
  return (
    <button className="favorite__button">
      <img src="/images/favorite.svg" alt="Favorite icon" />
    </button>
  );
};

export default FavoriteButton;
