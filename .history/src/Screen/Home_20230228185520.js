/** @format */

import React from "react";
import HomeCarousel from "../Component/HomeCarousel";
import Reviews from "../Component/Reviews";

// Images
import img from "../Assets/64.png";
import img1 from "../Assets/Home & Kitchen Banner.png";

import img3 from "../Assets/65.png";
import img4 from "../Assets/66.png";
import img5 from "../Assets/clock.png";
import img6 from "../Assets/Xtore® Home Decor Lucky Deer Family Matte Finish Ceramic Figures- (Set of 3).png";

import img7 from "../Assets/67.png";

import img8 from "../Assets/Street27® Cute Outer Space Astronaut Figurine Action Figure Toys Statue for Showpiece Home Living Room.png";
import img9 from "../Assets/ColeyBear Weighted Hand Woven Chunky.png";
import img10 from "../Assets/Morphy Richards Europa Drip 600-Watt 6-cup Drip Coffee Maker, Gloss Black, Regular (350012).png";
import img11 from "../Assets/Contigo Autoseal Aluminium Water Bottle, 24oz, Set of 1, Ss Monaco.png";

import img12 from "../Assets/Banner.jpg";
import img13 from "../Assets/62 (2).png";
import img14 from "../Assets/68.png";
import img15 from "../Assets/69.png";
import img16 from "../Assets/70.png";

import img17 from "../Assets/Holstein Housewares HU-09006B Cupcake maker - Black.png";
import img18 from "../Assets/72.png";
import img19 from "../Assets/73.png";
import img20 from "../Assets/74.png";

import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";

import Give from "../Images/GET ME THIS Desktop.jpg";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler(data) {
    navigate(data);
  }

  return (
    <>
      <HomeCarousel />

      <div className="NewP">
        <h1>HOME & KITCHEN</h1>
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
          <h1>KITCHEN ESSENTIALS </h1>
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
          LIVING ROOM
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          BED ROOM
        </div>
        <div className="month" style={{ minWidth: "200px" }}>
          KITCHEN
        </div>
      </div>

      <div className="BanImage">
        <img src={img1} alt="" />
      </div>

      <div className="pro">
        <h1>DECORATOR'S FAVOURITES</h1>
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
                />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img
              src={img19}
              alt=""
              onClick={() => NavigationHandler("/single")}
              style={{ width: "50%" }}
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
            <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
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
        <img src={Give} alt="" />
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

export default Home;
