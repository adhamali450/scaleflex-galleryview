import React from "react";
import GalleryItem from "./GalleryItem";
import "./Gallery.sass";

const Gallery = (props) => {
  return (
    <div className="gallery-view">
      {props.data.map((item, index) => {
        return (
          <GalleryItem
            className="gallery-view__item"
            imgDetails={item}
            key={index}
            onClick={() => {
              props.onGalleryItemClick.setimgIndexHandler(index);
              props.onGalleryItemClick.showCarouselHandler();
            }}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
