/** @format */

import React from "react";
import Mask from "../Images/Mask Group 1 1.png";
import { Carousel } from "react-responsive-carousel";
import img from '../Images/Get Me This 1.png'

const images = [
  {
    src: [Mask],
  },
  {
    src: [img],
  },
];

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
