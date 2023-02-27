/** @format */
import React, { useEffect } from "react";
import Mask2 from "../Images/Mask Group 2 1.png";
import Hero from "../Component/Hero";
import Reviews from "../Component/Reviews";
import gel from "../Images/618-39BSrgL._SL1500_-removebg-preview.png";
import adi from "../Images/adidas_Stadium_750_ML__26oz__Plastic_Water_Bottle-removebg-preview.png";
import Apple from "../Images/Apple_Watch_Series_7__GPS__45mm__Midnight-removebg-preview.png";
import some from "../Images/baby.png";
import clock from "../Images/clock-removebg-preview.png";
import Hair from "../Images/New_10-removebg-preview.png";
import Mail from "../Images/Mail_Icon-removebg-preview.png";
import phone from "../Images/Phone_call-removebg-preview.png";
import Whatsapp from "../Images/Whatsapp_icon-removebg-preview.png";
import Footer from "../Component/Footer";
import img from "../Images/Vitamin_C-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import newImg from "../Images/Canon_EF_70-200mm_f2.8L_IS_III_USM_Lens_for_Canon-removebg-preview.png";
import newImg2 from "../Images/61tE7IcuLmL._SL1500_-removebg-preview.png";
import newImg4 from "../Images/71LKSq7g51L._AC_SL1500_-removebg-preview.png";
import newImg6 from "../Images/Corsair_Vengeance_RGB_Pro_32GB__2x16GB__DDR4_2933-removebg-preview.png";
import newImg8 from "../Images/bag.png";
import newImg9 from "../Images/camera.png";
import newImg10 from "../Images/controller.png";
import newImg11 from "../Images/headphone.png";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import newImg13 from "../Images/Best Deals gadgets & Electronics.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler(data) {
    navigate(data);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  
  
  return (
    <>
   

      <Hero />

      <div className="two-sec">
        <div className="left">
          <img src={Mask2} alt="" />
        </div>
        <div className="right">
          <h1>THE STYLE ESSENTIALS</h1>
          <p>
            Allow notifications for tailored new arrivals <br />
            exicting launches and promotions
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="pro">
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg6} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg4} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg2} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontFamily: "MonumentMineMine",
        }}
      >
        CUSTOMER REVIEWS
      </p>
      <Reviews />

      <div className="pro" style={{ marginTop: "5%" }}>
        <h1>BEST DEAL'S</h1>
        <button>Shop Now</button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={newImg13} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={newImg8} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={newImg9} alt="" />
              </div>

              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={newImg10} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={newImg11} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pro">
        <h1>INTERNATION BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={newImg} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={newImg6} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={newImg4} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={newImg2} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
      </div>

      <h1
        style={{ textAlign: "center", fontFamily: "MonumentMineMine" }}
        className="forRes"
      >
        RECENTLY VIEWED
      </h1>

      <div className="many">
        <div>
          <img src={Hair} alt="" />
        </div>
        <div>
          <img src={some} alt="" />
        </div>
        <div>
          <img src={Apple} alt="" />
        </div>
        <div>
          <img src={clock} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={adi} alt="" />
        </div>
        <div>
          <img src={gel} alt="" />
        </div>
      </div>

      <div className="BanImage">
        <img src={newImg12} alt="" />
      </div>

      <h1
        style={{ textAlign: "center", fontFamily: "MonumentMineMine" }}
        className="forRes"
      >
        TALK TO HUMAN
      </h1>

      <table
        style={{
          margin: "auto",
          width: "700px",
          textAlign: "center",
          marginTop: "3%",
          marginBottom: "3%",
          fontSize: "23px",
        }}
      >
        <tr>
          <td style={{ borderRight: "1px solid black", width: "33%" }}>
            {" "}
            <img src={phone} alt="" style={{ width: "80px" }} />
          </td>
          <td style={{ borderRight: "1px solid black", width: "33%" }}>
            {" "}
            <img src={Mail} alt="" style={{ width: "80px" }} />
          </td>
          <td style={{ width: "33%" }}>
            {" "}
            <img src={Whatsapp} alt="" style={{ width: "80px" }} />
          </td>
        </tr>
        <tr>
          <td style={{ fontFamily: "FuturaMine" }}>PHONE</td>
          <td style={{ fontFamily: "FuturaMine" }}>EMAIL US</td>
          <td style={{ fontFamily: "FuturaMine" }}>WHATSAPP US</td>
        </tr>
      </table>

      <Footer />
    </>
  );
};

export default HomeScreen;
