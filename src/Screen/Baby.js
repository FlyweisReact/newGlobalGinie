/** @format */

import React, { useEffect } from "react";
import Hero2 from "../Component/Hero2";
import "./Baby.css";
import Mask2 from "../Assets/Mask Group 5.png";
import { Card } from "react-bootstrap";

import Cam from "../Assets/Comotomo 8 Ounce Baby Bottle, Pack of 2 (Green).png";
import Carioke from "../Assets/Chicco Natural Sensation Face Cream, Mother’s Womb Like Care, 0m+ (50 ml).png";
import Watch from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import Bud from "../Assets/Cetaphil Baby Daily Moisturizing Lotion 400ml with Organic Calendula for Face & Body, Moisturizer for Kids.png";

import Lady from "../Assets/Lady.png";

import Milton from "../Assets/Milton Bradley Classic Operation Skill Game.png";
import Toy from "../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png";
import Chair from "../Assets/StarAndDaisy Galaxy Star Multifunction 6 in 1 Baby High Chair  Foldable Feeding Chair Strong Dining Chair for Baby with Height Adjustment.png";
import Chair2 from "../Assets/71aMFEP0GjL._SL1500_.png";
import Reviews from "../Component/Reviews";

import Kid from "../Assets/Banner.png";
import img1 from "../Assets/Game.png";
import img3 from "../Assets/1.png";
import img4 from "../Assets/3.png";

import img5 from "../Assets/5.png";
import img6 from "../Assets/7.png";
import img7 from "../Assets/4.png";
import img8 from "../Assets/6.png";

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

import Ban from "../Assets/202.png";
import { useNavigate } from "react-router-dom";

import ResBigCarousel from "../Component/ResBigCarousel";

const Baby = () => {

  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler (data) {
    navigate(data)
    
  }

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <>
      <Hero2 />
      <div className="NewP">
        <h1>BABY & MOM</h1>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={Mask2} alt="" />
        </div>
        <div className="right">
          <h1>BABY ESSENTIALS </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <h1
        style={{ textAlign: "center", marginTop: "5%", fontFamily: "Monument" }}
      >
        SHOP BY
      </h1>
      <div className="child">
        <div className="month">0 - 6 MONTHS</div>
        <div className="month">6 - 12 MONTHS</div>
        <div className="month">12 - 18 MONTHS</div>
        <div className="month">18 - 24 MONTHS</div>
      </div>

      <div className="Give" id="GiveR">
        <h1>Share your child's birthdate and get exclusive offers*</h1>
        <h2>
          <input type={"date"} />
        </h2>
        <button>SUBMIT</button>
      </div>


      
      <div className="pro">
        <h1>PEDIATRICIAN RECOMENDED</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={Cam} alt="" />
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
            <img src={Carioke} alt="" />
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
            <img src={Watch} alt="" />
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
            <img src={Bud} alt="" />
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
 
      {/* <div className="pro" style={{ marginTop: "8%" }}>
        <h1>PEDIATRICIAN RECOMENDED</h1>
        <button  onClick={() => allProductNavigation()} >View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={Cam} alt="" onClick={() => NavigationHandler('/single')}/>
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

        <Card className="ProductCard">
          <Card.Body>
            <img src={Carioke} alt=""  onClick={() => NavigationHandler('/single')} />
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={Watch} alt=""   onClick={() => NavigationHandler('/single')}/>
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={Bud} alt=""   onClick={() => NavigationHandler('/single')}/>
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
      </div> */}



      <hr
        style={{
          width: "90%",
          border: "0px solid black",
          marginLeft: "5%",
        }}
      />
      <div className="two-sec">
        <div className="left">
          <img src={Lady} alt="" />
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
            <img src={Chair2} alt="" />
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
            <img src={Chair} alt="" />
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
            <img src={Milton} alt="" />
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
            <img src={Toy} alt="" />
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

      {/* <div className="pro" style={{ marginTop: "8%" }}>
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={Chair2} alt=""   onClick={() => NavigationHandler('/single')} />
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

        <Card className="ProductCard">
          <Card.Body>
            <img src={Chair} alt=""  onClick={() => NavigationHandler('/single')}/>
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={Milton} alt=""  onClick={() => NavigationHandler('/single')} />
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={Toy} alt=""  onClick={() => NavigationHandler('/single')} />
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
      </div> */}

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


<div className="myNewSec">
        <p className="head">BEST DEAL'S</p>
        <button className="btn">Shop Now</button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={Kid} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={img3} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img1} alt="" />
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
                <img src={img4} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={img3} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="resBigDealCarousel">
        <ResBigCarousel />
      </div>

      {/* <div className="pro" style={{ marginTop: "5%" }}>
        <h1>BEST DEAL'S</h1>
        <button className="shop" onClick={() => allProductNavigation()}>Shop Now</button>
      </div>

      <div className="photo">
        <div className="left">
          <img src={Kid} alt="" />
        </div>
        <div className="right">
          <div className="up">
            <div className="images">
              <img src={img3} alt=""  onClick={() => NavigationHandler('/single')} />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality
                <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images">
              <img src={img1} alt=""  onClick={() => NavigationHandler('/single')} />
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
              <img src={img4} alt=""  onClick={() => NavigationHandler('/single')} />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images"> 
              <img src={img3} alt=""  onClick={() => NavigationHandler('/single')} />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}


      <div className="pro">
        <h1>INTERNATIONAL BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={img5} alt="" style={{width : '50%'}} />
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
            <img src={img6} alt="" />
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
            <img src={img7} alt="" />
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
            <img src={img8} alt="" />
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


      {/* <div className="pro" style={{ marginTop: "8%" }}>
        <h1>INTERNATIONAL BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={img5} alt=""  onClick={() => NavigationHandler('/single')} />
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

        <Card className="ProductCard">
          <Card.Body>
            <img src={img6} alt=""  onClick={() => NavigationHandler('/single')} />
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={img7} alt=""   onClick={() => NavigationHandler('/single')} />
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
        <Card className="ProductCard">
          <Card.Body>
            <img src={img8} alt=""   onClick={() => NavigationHandler('/single')}/>
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
      </div> */}

      <h1 style={{ textAlign: "center", fontFamily: " Monument" }}>
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

      {/* <div className="Give">
        <img src={Give} alt="" />
      </div> */}
      <img
        src={Give}
        alt=""
        style={{
          width: "90%",
          marginLeft: "5%",
          marginBottom: "3%",
        }}
      />

      <h1 style={{ textAlign: "center", fontFamily: "Monument" }}>
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

export default Baby;
