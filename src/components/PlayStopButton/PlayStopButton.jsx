import { useState, useEffect } from "react";
import styles from "../ButtonStyles/ButtonStyles.module.css";

const PlayStopButton = ({ setCurrentIndex, images }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const autoPlay = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(autoPlay, 2000);
      setIntervalId(intervalId);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handleToggleClick = () => {
    setIsPlaying((prevEl) => !prevEl);
  };
  return (
    <div className="gallery">
      <button className={styles.playStopButton} onClick={handleToggleClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default PlayStopButton;
