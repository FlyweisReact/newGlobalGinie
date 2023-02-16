/** @format */

import React from "react";
import Mask from "../Assets/95.jpg";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Mask],
  },
];

const LifeCarousel = () => {
  return (
    <Carousel
        autoPlay
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop
      >
        {images.map((i, index) => (
          <div key={index}>
            <img src={i.src} alt="" className="CImage" />
          </div>
        ))}
      </Carousel>
  )
}

export default LifeCarousel