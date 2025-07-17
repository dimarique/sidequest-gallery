import styles from "./ImagesRibbon.module.css";

const ImagesRibbon = ({ images, currentIndex, setCurrentIndex }) => {
  return (
    <div className={styles.imagesRibbon}>
      {images.map((img, idx) => {
        if (idx === currentIndex) {
          console.log(idx);
        }
        return (
          <img
            onClick={() => setCurrentIndex(idx)}
            className={styles.pic}
            key={idx}
            src={img}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default ImagesRibbon;
