import React from "react";
import Mask from "../Images/Home & Kitchen Desktop 01.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "../Images/Home & Kitchen Desktop.jpg";

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

export default HomeCarousel