import React, { useEffect, useState } from "react";
import { url, fetchChached, cache } from "./common/utils";
import Gallery from "./components/Gallery";
import Carousel from "./components/carousel/Carousel";

import "./App.sass";
import logo from "./assets/logo.png";

function App() {
  console.clear();

  let [images, setImages] = useState([]);

  let [isCarouselShown, setIsCarouselShown] = useState(false);
  let [clickedImgIndex, setClickedImgIndex] = useState(0);

  //fetching on component mount
  useEffect(() => {
    fetchChached(url)
      // if we got our images through <data> property of the response,
      // the response was from HTTP request (Data not cached).
      // If data is cached we access it through <.json()> of the response.
      .then((res) => {
        if (res.data) setImages(res.data);
        else res.json().then((json) => setImages(json));
      });
  }, []);

  cache(url);

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
