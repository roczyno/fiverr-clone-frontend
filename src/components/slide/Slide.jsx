import React from "react";
import Slider from "react-slick";
import "./slide.scss";
const Slide = ({ children, slidesToShow, slidesToScroll, dots }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          dots={dots}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
