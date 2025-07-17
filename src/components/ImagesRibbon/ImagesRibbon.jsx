import styles from "./ImagesRibbon.module.css";

const ImagesRibbon = ({ images, currentIndex, setCurrentIndex }) => {
  return (
    <div className={styles.imagesRibbon}>
      {images.map((image, imageIdx) => {
        if (imageIdx === currentIndex) {
        }
        return (
          <img
            onClick={() => setCurrentIndex(imageIdx)}
            className={styles.img}
            key={imageIdx}
            src={image}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default ImagesRibbon;
