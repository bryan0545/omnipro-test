import "./favoriteButton.scss";
export interface FavoriteButtonInterface {}

const FavoriteButton: React.FC<FavoriteButtonInterface> = () => {
  return (
    <button className="favorite-button">
      <img src="/images/favorite.svg" alt="Favorite icon" />
    </button>
  );
};

export default FavoriteButton;
