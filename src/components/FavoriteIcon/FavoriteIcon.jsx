import { useDispatch, useSelector } from "react-redux";
import HeartIcon from "../../assets/icons/fav.svg";
import ActiveHeartIcon from "../../assets/icons/activeFav.svg";
import { toggleFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import styles from "./FavoriteIcon.module.css";

export const FavoriteIcon = ({ carId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(carId);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(carId));
  };

  return (
    <button className={styles.btn} onClick={handleToggleFavorite}>
      <img
        src={isFavorite ? ActiveHeartIcon : HeartIcon}
        alt="favorite icon"
        aria-label="Add to favorites"
      />
    </button>
  );
};
