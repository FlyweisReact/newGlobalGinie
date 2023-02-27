
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from '../Images/Gadgets & Electronics Desktop 01.jpg'
import img2 from "../Images/Gadgets & Electronics Desktop.jpg" 

const images = [
  {
    src: [img],
  },
  {
    src: [img2],
  },
];

const TechCarousel = () => {
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

export default TechCarousel