import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import imgMagnifier from "../assets/magnifier.svg";

import "./GalleryItem.sass";

const GalleryItem = (props) => {
  const img = props.imgDetails;
  return (
    <div className={props.className} id={props.id} onClick={props.onClick}>
      <div className="gallery-view__item__overlay">
        <img src={imgMagnifier} alt="tap to open" />
      </div>

      <LazyLoadImage
        className="gallery-view__item__img"
        alt={img.title}
        src={img.url}
      />
    </div>
  );
};

export default GalleryItem;
