import styles from "./GalleryContent.module.css";



const GalleryContent = ({ currentIndex, images }) => {


  return (
    <div className={styles.galleryContent}>
      <img src={images[currentIndex]} alt="galleryImg" />
    </div>
  );
};

export default GalleryContent;
