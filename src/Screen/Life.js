/** @format */

import React, { useEffect } from "react";
import Reviews from "../Component/Reviews";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
// Images
import img from "../Assets/96.jpg";

import img3 from "../Assets/97.png";
import img4 from "../Assets/98.png";
import img5 from "../Assets/99.png";
import img6 from "../Assets/100.png";

import img7 from "../Assets/101.png";

import img8 from "../Assets/103.png";
import img9 from "../Assets/104.png";
import img10 from "../Assets/105.png";
import img11 from "../Assets/106.png";

import img12 from "../Assets/107.png";
import img13 from "../Assets/108.png";
import img14 from "../Assets/109.png";
import img15 from "../Assets/111.png";
import img16 from "../Assets/110.png";
import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import LifeCarousel from "../Component/LifeCarousel";

import New from "../Assets/96 1.png";

import Nike from "../Assets/Vector.png";
import { useNavigate } from "react-router-dom";

const Life = () => {
  const onClc = () => {
    document.getElementById("fileB").click();
  };

  const navigate = useNavigate();

  function NavigationHandler(data) {
    navigate(data);
  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <LifeCarousel />

      <div className="NewP">
        <h1>LIFESTYLE & SPORTS</h1>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h1>SPORTS ESSENTIALS </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "3%",
          fontFamily: "MonumentMineMine",
        }}
      >
        SHOP BY
      </h1>
      <div className="child">
        <div className="month" style={{ minWidth: "200px" }}>
          MEN
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          WOMEN
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          KIDS
        </div>
      </div>

      <div className="gym-B">
        <div className="left">
          <h1>
            WORKOUT <br />
            RECORD <br />
            UPLOAD <br />
          </h1>
          <h2>
            send us your <br />
            training video <br />
            &
            <br />
            stand a chance to win <br />
            a nike gym bag and also <br />
            get feautred on our <br />
            instagram page <br />
          </h2>
          <p>ENTER CONTEST</p>
          <button onClick={onClc}>UPLOAD NOW</button>
          <input type={"file"} style={{ display: "none" }} id="fileB" />
          <br />
          <img src={Nike} alt="" />
        </div>
        <div className="right">
          <img src={New} alt="" />
        </div>
      </div>

      <div className="pro">
        <h1>ATHLETE’s CHOICE</h1>
        <button onClick={() => NavigationHandler("/allProduct")}>
          View all
        </button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img
              src={img3}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
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
            <img
              src={img5}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
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
            <img
              src={img4}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
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
            <img
              src={img6}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
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

      <div className="two-sec">
        <div className="left">
          <img src={img7} alt="" />
        </div>
        <div className="right">
          <h1>
            KITCHEN
            <br />
            ESSENTIALS{" "}
          </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="pro">
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => NavigationHandler("/allProduct")}>
          View all
        </button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={img8} alt="" />
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
            <img src={img9} alt="" />
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
            <img src={img10} alt="" style={{ width: "50%" }} />
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
            <img src={img11} alt="" />
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

      <div className="pro">
        <h1>BEST DEAL'S</h1>
        <button onClick={() => NavigationHandler("/allProduct")}>
          Shop Now
        </button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={img12} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img
                  src={img13}
                  alt=""
                  onClick={() => NavigationHandler("/single")}
                />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB  <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img
                  src={img14}
                  alt=""
                  onClick={() => NavigationHandler("/single")}
                />
              </div>

              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB  <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img
                  src={img15}
                  alt=""
                  onClick={() => NavigationHandler("/single")}
                  style={{ width: "40%" }}
                />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB  <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img
                  src={img16}
                  alt=""
                  onClick={() => NavigationHandler("/single")}
                />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB  <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", fontFamily: "MonumentMineMine" }}>
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
          <img src={Apple} alt="" id="app" />
        </div>
        <div>
          <img src={clock} alt="" id="clock" />
        </div>
        <div>
          <img src={Oil} alt="" />
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

export default Life;
