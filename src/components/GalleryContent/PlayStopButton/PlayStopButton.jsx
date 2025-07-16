// Ты делаешь одну кнопку — Play/Pause, которая будет включать и останавливать автоматическую прокрутку картинок в галерее.
// Когда пользователь нажимает Play, картинки начинают переключаться сами, например, каждые 3 секунды.
// Когда нажимает Pause, картинки перестают переключаться.
// Важно, чтобы при повторном нажатии на Play картинки продолжали переключаться с того места, где остановились.
// Для этого нужно использовать useState и useEffect из React.

import React, { useState, useEffect,  } from 'react';
import style from './PlayStopButton.module.css';




const PlayStopButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     let interval;
    //     if (isPlaying) {
    //         interval = setInterval(() => {
    //            onNext();
    //         }, 1000);
    //     }
    //     return () => clearInterval(interval);
    // }, [isPlaying, onNext]);

    const handleToggleClick = () => {
        setIsPlaying(prevEl => !prevEl);
    }

  return (
        <div className="gallery">
            <button className={style.button} onClick={handleToggleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
           

        </div>
    )


}
  

export default PlayStopButton;

// const [intervalId, setIntervalId] = useState(null);
//   const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];
//   const togglePlay = () => {
//     if (!isPlaying) {
//       const id = setInterval(() => autoPlay(), 1000);
//       setIsPlaying(true);
//       setIntervalId(id);
//     } else {
    // setIsPlaying(false);
//       clearInterval(intervalId);
//       
//     }
//   };
// const id = setInterval(() => autoPlay(), 1000);
// const autoPlay = () => {
//     setCurrentIndex((currentIndex) => currentIndex + 1);
//   };