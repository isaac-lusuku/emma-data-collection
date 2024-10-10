import React from "react";

const Image = ({ imgSrc, className, style }) => {
  return <img className={className} src={imgSrc} alt={imgSrc} style={style} />;
};

export default Image;
