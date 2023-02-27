
import React from "react";
import Mask from "../Images/Men's Grooming Essentials Desktop 01.jpg";
import img from "../Images/Men's Grooming Essentials Desktop.jpg";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: [Mask],
  },
  {
    src: [img],
  },
];

const MensCarousel = () => {
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

export default MensCarousel