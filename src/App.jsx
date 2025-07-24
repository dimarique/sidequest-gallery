import "./App.css";
import { useState } from "react";
import { useGetData } from "./hooks/useGetData";

import GalleryContent from "./components/GalleryContent/GalleryContent";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import ButtonPrev from "./components/ButtonPrev/ButtonPrev";
import PlayStopButton from "./components/PlayStopButton/PlayStopButton";
import ButtonWrapper from "./components/ButtonWrapper/ButtonWrapper";
import ImagesRibbon from "./components/ImagesRibbon/ImagesRibbon";
import LoginForm from "./components/LoginForm/LoginForm";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("&category=backgrounds");
  const images = useGetData(category);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="content_wrapper">
      <LoginForm />
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
    </div>
  );
}

export default App;
