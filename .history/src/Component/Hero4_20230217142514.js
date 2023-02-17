/** @format */

import React from "react";
import Mask from "../Images/beauty & Cosmetics Desktop,jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Images/beauty & Cosmetics Desktop 01.jpg";

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