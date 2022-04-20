import React, { useState } from "react";
import Modal from "../ui/Modal";
import ChevronButton from "./ChevronButton";
import "./Carousel.sass";

const Carousel = (props) => {
  let images = props.images;

  let [imgIndex, setImgIndex] = useState(props.imgIndex);

  let currentImg = images[imgIndex];

  let relativeIndex = `${imgIndex + 1}/${images.length}`;

  const toggleImg = (dir) => {
    if (dir === "left") setImgIndex(imgIndex - 1);
    else setImgIndex(imgIndex + 1);
  };

  const canToggleImg = (dir) => {
    if (dir === "left") return imgIndex > 0;
    else return imgIndex < images.length - 1;
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
            onClick={() => toggleImg("left")}
          />
          <ChevronButton
            dir="right"
            isClickable={canToggleImg("right")}
            onClick={() => toggleImg("right")}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Carousel;
