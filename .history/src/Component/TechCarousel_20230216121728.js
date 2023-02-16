
import React from "react";
import Mask from "../Assets/48.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/48.jpg";
import img from '../Images/Gadgets & Electronics Desktop 01.jpg'
import img2 from "../Images/Gadgets & Electronics Desktop.jpg" 

const images = [
  {
    src: [img],
  },
  {
    src: [Image],
  },
];

const TechCarousel = () => {
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

export default TechCarousel