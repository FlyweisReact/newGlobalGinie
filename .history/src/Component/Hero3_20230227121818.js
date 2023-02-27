/** @format */

import React from "react";
import Mask from "../Images/Health & Personal Care Desktop.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Images/Health & Personal Care Desktop 01.jpg";

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
      autoPlay={true}
         interval={2000}
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        stopOnHover={true}
        showStatus={false} 
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
