/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Camera2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import Bag from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import Game from "../Assets/719xFB+eo6L._SL1500_.png";
import Head from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import man from "../Assets/photographer-man-taking-photos-village.png";

const images = [
  {
    src: [Camera2],
  },
  {
    src: [Bag],
  },
  {
    src: [Game],
  },
  {
    src: [Head],
  },
];

const ResBigCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        className="carouselCOn"
      >
        <div>
          <img src={man} alt="" className="first" />
        </div>
        {images.map((i, index) => (
          <div key={index} className="upperDivv">
            <img src={i.src} alt="" className="all" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ResBigCarousel;
