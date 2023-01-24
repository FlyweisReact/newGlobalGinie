/** @format */

import React from "react";
import Mask from "../Assets/27.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Image],
  },
];

const Hero4 = () => {
  return (
    <Carousel
        autoPlay
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <i
                className="fa-solid fa-arrow-left arrow"
                onClick={clickHandler}
              ></i>
            )
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <i
                className="fa-solid fa-arrow-right arrow"
                onClick={clickHandler}
              ></i>
            )
          );
        }}
      >
        {images.map((i, index) => (
          <div key={index}>
            <img src={i.src} alt="" className="CImage" />
          </div>
        ))}
      </Carousel>
  )
}

export default Hero4