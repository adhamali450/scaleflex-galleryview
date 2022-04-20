import React from "react";
import imgMagnifier from "../assets/magnifier.svg";

import "./GalleryItem.sass";

const GalleryItem = (props) => {
  return (
    <div className={props.className} id={props.id} onClick={props.onClick}>
      <div className="gallery-view__item__overlay">
        <img src={imgMagnifier} alt="tap to open" />
      </div>

      <div
        className="gallery-view__item__img"
        style={{ backgroundImage: `url('${props.imgDetails.url}')` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
