
import React from "react";
import Mask from "../Assets/75.jpg";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Mask],
  },
];

const MensCarousel = () => {
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

export default MensCarousel