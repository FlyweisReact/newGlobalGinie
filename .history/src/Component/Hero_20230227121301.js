/** @format */

import React from "react";
import Mask from "../Images/Mask Group 1 1.png";
import { Carousel } from "react-responsive-carousel";
import img from '../Images/Homepage Desktop 01.jpg'

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
         autoPlay={true}
         interval={400}
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
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
