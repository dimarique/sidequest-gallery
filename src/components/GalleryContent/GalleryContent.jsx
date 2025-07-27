import styles from "./GalleryContent.module.css";
import Favorites from "../Favorites/Favorites";

const GalleryContent = ({ currentIndex, images }) => {
  return (
    <div className={styles.galleryContent}>
      <Favorites imageId={images[currentIndex]} />
      {images && (
        <img
          src={images[currentIndex]}
          className={styles.picture}
          alt="galleryImg"
        />
      )}
    </div>
  );
};

export default GalleryContent;
