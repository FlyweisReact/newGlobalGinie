/** @format */

import React from "react";
import Mask from "../Images/Lifestyle & Sports Desktop.jpg";
import img  from '../Images/Lifestyle & Sports Desktop 01.jpg'
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: [Mask],
  },
  {
    src: [img],
  },
];

const LifeCarousel = () => {
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
  )
}

export default LifeCarousel