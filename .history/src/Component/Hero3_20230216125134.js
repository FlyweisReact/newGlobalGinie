/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 4.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Image],
  },
];

const Hero3 = () => {
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
  );
};

export default Hero3;