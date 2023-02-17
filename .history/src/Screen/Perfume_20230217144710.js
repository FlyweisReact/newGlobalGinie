/** @format */

import React from "react";
import Hero4 from "../Component/Hero4";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import Reviews from "../Component/Reviews";

// Images

import img from "../Assets/28.png";

import img2 from "../Images/Group 840.png";

import img3 from "../Assets/30.png";
import img4 from "../Assets/31.png";
import img5 from "../Assets/New 10.png";
import img6 from "../Assets/32.png";

import img7 from "../Assets/33.png";

import img8 from "../Assets/35.png";
import img9 from "../Assets/36.png";
import img10 from "../Assets/37.png";
import img11 from "../Assets/38.png";

import img12 from "../Images/Best Deals beauty & Cosmetics 01.jpg";
import img13 from "../Assets/40.png";
import img14 from "../Assets/41.png";
import img15 from "../Assets/42.png";
import img16 from "../Assets/43.png";

import img17 from "../Assets/45.png";
import img18 from "../Assets/46.png";
import img19 from "../Assets/47.png";
import img20 from "../Assets/44.png";

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
import { useNavigate } from "react-router-dom";

const Perfume = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler(data) {
    navigate(data);
  }

  return (
    <>
      <Hero4 />
      <div className="NewP">
        <h2>BEAUTY & COSMETICS</h2>
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
          <h1>HEALTH ESSENTIALS </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>
      <h1
        style={{ textAlign: "center", marginTop: "3%", fontFamily: "Mountain" }}
      >
        SHOP BY
      </h1>
      <div className="child">
        <div className="month" style={{ minWidth: "200px" }}>
          GLOBAL SALE
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          NEW ARRIVALS
        </div>
      </div>

      <div className="BanImage">
        <img src={img2} alt="" />
      </div>

      <div className="pro">
      <h1>MAKE’UP ESSENTIALS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
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
            <soan>₹31,970.00</soan>
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
            <soan>₹31,970.00</soan>
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
            <soan>₹31,970.00</soan>
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
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>

   

      <div className="two-sec">
        <div className="left">
          <img src={img7} alt="" />
        </div>
        <div className="right">
          <h1>HEALTH ESSENTIALS </h1>
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
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img8}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img9}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img10}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img11}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
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
        <button onClick={() => allProductNavigation()}>Shop Now</button>
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
                GB ₹31,970.00
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
                GB ₹31,970.00
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
              <img
                src={img15}
                alt=" "
                onClick={() => NavigationHandler("/single")}
              />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
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
                GB ₹31,970.00
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="pro">
      <h1>INTERNATIONAL BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img17}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img18}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img19}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
          <img
              src={img20}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
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

export default Perfume;
