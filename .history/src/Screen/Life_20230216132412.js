/** @format */

import React from "react";
import { Card } from "react-bootstrap";
import Reviews from "../Component/Reviews";

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

import img17 from "../Assets/112.png";
import img18 from "../Assets/113.png";
import img19 from "../Assets/114.png";
import img20 from "../Assets/116.png";

import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";

import Give from "../Assets/Get Me This.png";

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
          fontFamily: "MonumentMine",
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
        <button onClick={() => NavigationHandler("/allProduct")}>View all</button>
      </div>

    

      <div className="product">
        <Card className="ProductCard" style={{ paddingTop: "80px" }}>
          <Card.Body>
            <img
              src={img3}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>

        <Card className="ProductCard" style={{ paddingTop: "20px" }}>
          <Card.Body>
            <img
              src={img5}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
            <br />
            3200MHz C16 LED Desktop Memory - Black
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard" style={{ width: "350px" }}>
          <Card.Body>
            <img
              src={img4}
              alt=""
              style={{ paddingTop: "100px" }}
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Apple Watch Series 8 GPS + Cellular 45mm Midnight
            <br />
            Aluminium Case with Midnight Sport Band - M/L <br />
            <soan>₹41,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard" style={{ width: "350px" }}>
          <Card.Body>
            <img
              src={img6}
              alt=""
              style={{ paddingTop: "50px" }}
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>
      <div className="Desc">
        <p>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>
      <hr
        style={{
          width: "90%",
          border: "0px solid black",
          marginLeft: "5%",
        }}
      />
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

      <div className="pro" style={{ marginTop: "8%" }}>
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => NavigationHandler("/allProduct")}>
          View all
        </button>
      </div>

      <div className="product">
        <Card
          className="ProductCard"
          style={{ paddingTop: "150px", width: "350px" }}
        >
          <Card.Body>
            <img
              src={img8}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>

        <Card
          className="ProductCard"
          style={{ paddingTop: "40px", width: "350px" }}
        >
          <Card.Body>
            <img
              src={img9}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
            <br />
            3200MHz C16 LED Desktop Memory - Black
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>
        <Card
          className="ProductCard"
          style={{ padding: "60px", width: "380px" }}
        >
          <Card.Body>
            <img
              src={img10}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Apple Watch Series 8 GPS + Cellular 45mm Midnight
            <br />
            Aluminium Case with Midnight Sport Band - M/L <br />
            <soan>₹41,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard" style={{ paddingTop: "100px" }}>
          <Card.Body>
            <img
              src={img11}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>
      <div className="Desc">
        <p>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>
      <hr
        style={{
          width: "90%",
          border: "0px solid black",
          marginLeft: "5%",
        }}
      />

      <hr
        style={{
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />
      <Reviews />

      <hr
        style={{
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />

      <div className="pro" style={{ marginTop: "5%" }}>
        <h1>BEST DEALS</h1>
        <button
          className="shop"
          onClick={() => NavigationHandler("/allProduct")}
        >
          Shop Now
        </button>
      </div>

      <div className="photo">
        <div className="left">
          <img src={img12} alt="" />
        </div>
        <div className="right">
          <div className="up">
            <div className="images">
              <img
                src={img13}
                alt=""
                onClick={() => NavigationHandler("/single")}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality
                <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images">
              <img
                src={img14}
                alt=""
                onClick={() => NavigationHandler("/single")}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
          </div>
          <div className="up">
            <div className="images">
              <img
                src={img15}
                alt=""
                onClick={() => NavigationHandler("/single")}
                style={{ paddingLeft: "100px", paddingRight: "100px" }}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images">
              <img
                src={img16}
                alt=""
                onClick={() => NavigationHandler("/single")}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pro" style={{ marginTop: "8%" }}>
        <h1>INTERNATIONAL BEST SELLERS</h1>
        <button onClick={() => NavigationHandler("/allProduct")}>
          {" "}
          View all
        </button>
      </div>

      <div className="product">
        <Card
          className="ProductCard"
          style={{ width: "380px", paddingTop: "50px" }}
        >
          <Card.Body>
            <img
              src={img17}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>

        <Card
          className="ProductCard"
          style={{ width: "350px", paddingTop: "50px" }}
        >
          <Card.Body>
            <img
              src={img18}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
            <br />
            3200MHz C16 LED Desktop Memory - Black
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>
        <Card
          className="ProductCard"
          style={{ width: "350px", paddingTop: "50px" }}
        >
          <Card.Body>
            <img
              src={img19}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Apple Watch Series 8 GPS + Cellular 45mm Midnight
            <br />
            Aluminium Case with Midnight Sport Band - M/L <br />
            <soan>₹41,970.00</soan>
          </p>{" "}
        </div>
        <Card
          className="ProductCard"
          style={{ width: "350px", paddingTop: "100px" }}
        >
          <Card.Body>
            <img
              src={img20}
              alt=""
              onClick={() => NavigationHandler("/single")}
            />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>
      <div className="Desc">
        <p>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>

      <h1 style={{ textAlign: "center", fontFamily: "MonumentMine" }}>
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

      <div className="Give">
        <img src={Give} alt="" />
      </div>

      <h1 style={{ textAlign: "center", fontFamily: "MonumentMine" }}>
        TALK TO HUMAN
      </h1>
      <div className="human">
        <div>
          <img src={phone} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>PHONE</h3>
        </div>
        <div className="Hori"></div>
        <div>
          <img src={Mail} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>EMAIL US</h3>
        </div>
        <div className="Hori"></div>

        <div>
          <img src={Whatsapp} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>WHATSAPP US</h3>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Life;