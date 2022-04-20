import React, { useEffect, useState } from "react";
import url from "./common/utils";
import Gallery from "./components/Gallery";
import Carousel from "./components/carousel/Carousel";

import "./App.sass";
import logo from "./assets/logo.png";

const axios = require("axios").default;

function App() {
  let [images, setImages] = useState([
    {
      uuid: "f992d43f-33cb-55a6-a6e9-ee7399a50000",
      name: "adrien-olichon-RCAhiGJsUUE-unsplash.jpg",
      url: "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pics/adrien-olichon-RCAhiGJsUUE-unsplash.jpg?vh=0b2b72",
    },
  ]);

  let [isCarouselShown, setIsCarouselShown] = useState(false);
  let [clickedImgIndex, setClickedImgIndex] = useState(0);

  // Fetch images on component mount
  useEffect(() => {
    axios.get(url).then((res) => {
      setImages(res.data);
    });
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
