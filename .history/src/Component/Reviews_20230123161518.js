/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Rating from "../Assets/Ratings.png";
import User from "../Assets/Mask Group 3.png";

const images = [
  {
    text: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera",
    author: "React",
  },
  {
    text: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera",
    author: "Node",
  },
];

const Reviews = () => {
  return (
    <>
      <Carousel
        autoPlay
        className="ReviewCarousel"
        showThumbs={false}
        infiniteLoop
      >
        {images.map((i, index) => (
          <div key={index} style={{marginBottom : '10%' }}>
            <div className="Review">
              <img src={Rating} alt="" className="Review" />
            </div>
            <div className="customerR">
              <p>
                Wyze Cam v3 with Color Night Vision, Wired 1080p HD <br />
                Indoor/Outdoor Video Camera
              </p>
            </div>
            <div className="ReviewImage">
              <div className="new">
                <img src={User} alt=""  style={{width : '100px'}} /> <p > Ritu Kaur</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Reviews;
