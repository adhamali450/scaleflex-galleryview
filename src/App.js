import React, { useEffect, useState } from "react";
import fetchImages from "./common/utils";
import Gallery from "./components/Gallery";
import Carousel from "./components/carousel/Carousel";

import "./App.sass";
import logo from "./assets/logo.png";

function App() {
  let [images, setImages] = useState([{ uuid: "", name: "", url: "" }]);
  let [isCarouselShown, setIsCarouselShown] = useState(false);

  let [clickedImgIndex, setClickedImgIndex] = useState(0);

  // Fetch images on component mount
  useEffect(() => {
    return async () => {
      const imagesFetched = await fetchImages();
      setImages(imagesFetched);
    };
  }, []);

  const showCarouselHandler = () => setIsCarouselShown(true);
  const hideCarouselHandler = () => setIsCarouselShown(false);

  const setImgIndexHandler = (index) => {
    setClickedImgIndex(index);
  };

  return (
    <div className="App">
      {isCarouselShown && (
        <Carousel
          images={images}
          imgIndex={clickedImgIndex}
          onHideCarousel={hideCarouselHandler}
        />
      )}
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>Gallery</span>
          </div>
        </header>
        <main>
          <Gallery
            data={images}
            onGalleryItemClick={{
              setimgIndexHandler: setImgIndexHandler,
              showCarouselHandler: showCarouselHandler,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
