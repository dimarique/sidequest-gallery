import { useState, useEffect } from "react";
import StarEmpty from "./Image/StarEmpty.png";
import styles from "./Favorites.module.css";
import StarFilled from "./Image/StarFilled.png";

export default function Favorite({ imageId }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = () => {
    if (!favorites.includes(imageId)) {
      setFavorites((prev) => [...prev, imageId]);
    }
  };
  const removeFavorite = () => {
    setFavorites((prev) => prev.filter((id) => id !== imageId));
  };

  return (
    <div className={styles.galleryContent}>
      <img
        className={styles.favoriteIcon}
        src={favorites.includes(imageId) ? StarFilled : StarEmpty}
        alt=""
        onClick={favorites.includes(imageId) ? removeFavorite : addFavorite}
      />
    </div>
  );
}
