import "./App.css";

import { useState } from "react";

import img0 from "./data/image_0.jpg";
import img1 from "./data/image_1.jpg";
import img2 from "./data/image_2.jpg";
import img3 from "./data/image_3.jpg";
import img4 from "./data/image_4.jpg";
import img5 from "./data/image_5.jpg";
import img6 from "./data/image_6.jpg";
import img7 from "./data/image_7.jpg";
import img8 from "./data/image_8.jpg";
import img9 from "./data/image_9.jpg";
import GalleryContent from "./components/GalleryContent/GalleryContent";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import ButtonPrev from "./components/ButtonPrev/ButtonPrev";
import PlayStopButton from "./components/PlayStopButton/PlayStopButton";
import ButtonWrapper from "./components/ButtonWrapper/ButtonWrapper";
import ImagesRibbon from "./components/ImagesRibbon/ImagesRibbon";
import LoginForm from "./components/LoginForm/LoginForm";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <LoginForm />
      <Favorites imageId={images[currentIndex]} />
      <GalleryContent
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        images={images}
      />
      <ImagesRibbon images={images} setCurrentIndex={setCurrentIndex} />
      <ButtonWrapper>
        <ButtonPrev
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          images={images}
        />
        <PlayStopButton
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          images={images}
        />
        <ButtonNext
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          images={images}
        />
      </ButtonWrapper>
      
    </>
  );
}

export default App;
