import React from "react";
import Mask from "../Assets/63.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Baby.png";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Image],
  },
];
const HomeCarousel = () => {
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

export default HomeCarousel