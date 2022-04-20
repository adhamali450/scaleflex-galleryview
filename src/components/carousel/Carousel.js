import React, { useState } from "react";
import Modal from "../ui/Modal";
import ImgNeighboursView from "./ImgNeighboursView";
import ChevronButton from "./ChevronButton";
import "./Carousel.sass";

const Carousel = (props) => {
  let images = props.images;

  let [imgIndex, setImgIndex] = useState(props.imgIndex);

  //getting 4 neighbours instead of 2 for if the image was either the left/right most
  let imgNeighbours = [
    images[imgIndex - 2],
    images[imgIndex - 1],
    images[imgIndex],
    images[imgIndex + 1],
    images[imgIndex + 2],
  ];

  let currentImg = images[imgIndex];

  let relativeIndex = `${imgIndex + 1}/${images.length}`;

  const toggleImgHandler = (dir) => {
    if (dir === "left") setImgIndex(imgIndex - 1);
    else setImgIndex(imgIndex + 1);
  };

  const canToggleImg = (dir) => {
    if (dir === "left") return imgIndex > 0;
    else return imgIndex < images.length - 1;
  };

  // Replace currently displayed image with another one (used when a neighbour img is clicked)
  const replaceImageHandler = (img) => {
    setImgIndex(images.indexOf(img));
  };

  return (
    <Modal onHideModal={props.onHideCarousel}>
      <div className="carousel">
        <div className="carousel__img-container">
          <div
            className="carousel__img"
            style={{ backgroundImage: `url('${currentImg.url}')` }}
          ></div>
          <div className="carosuel__img-details">
            <span className="carousel__img-title">{currentImg.name}</span>
            <span className="carousel__img-relative-index">
              {relativeIndex}
            </span>
          </div>
        </div>
        <div className="carousel__action">
          <ChevronButton
            dir="left"
            isClickable={canToggleImg("left")}
            onClick={() => toggleImgHandler("left")}
          />
          <ChevronButton
            dir="right"
            isClickable={canToggleImg("right")}
            onClick={() => toggleImgHandler("right")}
          />
        </div>
        <ImgNeighboursView
          className="neighbours-view"
          imgNeighbours={imgNeighbours}
          imgIndex={imgIndex}
          onItemClick={replaceImageHandler}
        />
      </div>
    </Modal>
  );
};

export default Carousel;
