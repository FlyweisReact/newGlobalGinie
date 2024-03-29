/** @format */

import React, { useEffect } from "react";
import Reviews from "../Component/Reviews";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
// Images
import Hero3 from "../Component/Hero3";
import img from "../Assets/8.png";
import img3 from "../Assets/Oil.png";
import img4 from "../Assets/10.png";
import img5 from "../Assets/12.png";
import img6 from "../Assets/13.png";
import img7 from "../Assets/14.png";
import img8 from "../Assets/15.png";
import img9 from "../Assets/16.png";
import img10 from "../Assets/17.png";
import img11 from "../Assets/18.png";
import img12 from "../Assets/19.png";
import img13 from "../Assets/20.png";
import img14 from "../Assets/21.png";
import img16 from "../Assets/23.png";
import img15 from "../Assets/22.png";
import img17 from "../Assets/24.png";
import img18 from "../Assets/25.png";
import img19 from "../Assets/26.png";
import img20 from "../Assets/27.png";
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

import Give2 from "../Assets/9 1.png";
import { useNavigate } from "react-router-dom";

const Gym = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler(data) {
    navigate(data);
  }

  useEffect(() => {
    window.scrollTo(0 , 0)
  },[])

  return (
    <>
      <Hero3 />
      <div className="NewP">
        <h2>HEALTH & PERSONAL CARE</h2>
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

      <div className="two-sec-form">
        <div className="left">
          <h3>Calculate Your BMI For a Healthy Start</h3>
          <div className="back">
            <div className="NewForm">
              <h2>
                Your <br /> Height
              </h2>
              <input type="text" />
            </div>
            <div className="NewForm">
              <h2>
                Your <br /> Weight
              </h2>
              <input type="text" />
            </div>
            <button>Calculate BMI</button>
          </div>

          <div className="BMI">
            <h2>Your BMI</h2>
            <input type={"text"} />
          </div>
          <button className="BMIbutton">SUBMIT</button>
        </div>
        <div className="right">
          <img src={Give2} alt="" />
        </div>
      </div>

      <div className="pro">
        <h1>NUTRITIONIST RECOMENDED</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img
              src={img4}
              alt=""
              onClick={() => NavigationHandler("/single")}
              style={{ width: "40%" }}
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
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={img7} alt="" />
        </div>
        <div className="right">
          <h2>
            ITS AWESOME
            <br />
            <span>TO BE MOM</span>
          </h2>
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
          <img src={img16} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img13} alt="" style={{ width: "50%" }} />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img14} alt="" />
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
                <img src={img15} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB <span style={{ fontWeight: "bold" }}>₹31,970.00</span>
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img12} alt="" />
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
            <img src={img18} alt="" style={{ width: "50%" }} />
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
            <img src={img20} alt="" />
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
            <img src={img19} alt="" />
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
            <img src={img17} alt="" style={{ width: "50%" }} />
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

export default Gym;
