import React from "react";
import "./ChevronButton.sass";

import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";

const ChevronButton = (props) => {
  const classList = `btn-chevron ${props.isClickable ? "" : "disabled"}`;
  return (
    <button
      disabled={!props.isClickable}
      className={classList}
      style={{
        backgroundImage:
          props.dir === "left" ? `url(${chevronLeft})` : `url(${chevronRight})`,
      }}
      onClick={props.onClick}
    ></button>
  );
};

export default ChevronButton;
