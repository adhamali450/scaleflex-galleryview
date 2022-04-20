import React from "react";
import "./ImgNeighboursView.sass";

const ImgNeighboursView = (props) => {
  const n = props.imgNeighbours;
  let thumbnails;

  //indicates whether each box of the three will be highlighted or not
  const areActive = [!n[1], n[1] && n[3], !n[3]];

  if (areActive[0]) {
    //lhs is active
    thumbnails = [n[2], n[3], n[4]];
  } else if (areActive[1]) {
    //m is active
    thumbnails = [n[1], n[2], n[3]];
  } else if (areActive[2]) {
    //rhs is active
    thumbnails = [n[0], n[1], n[2]];
  }

  return (
    <div className="neighbours-view">
      {areActive.map((val, i) => {
        return (
          <div
            className={`thumbnail ${val && "active"}`}
            key={i}
            style={{ backgroundImage: `url('${thumbnails[i].url}')` }}
            title={thumbnails[i].name}
            onClick={() => props.onItemClick(thumbnails[i])}
          ></div>
        );
      })}
    </div>
  );
};

export default ImgNeighboursView;
