/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Group 166.png";
import Give from "../Assets/Get Me This.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import img67 from "../Assets/04.png";
import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
import { useNavigate } from "react-router-dom";

const Accept = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
      </div>

      <div className="shopping">
        <div>
          <h1>
            RETURN <br />
            ACCEPTED
          </h1>
          <h2>Confirmation will be sent to your registered email ID.</h2>
        </div>

        <img src={img2} alt="" />
      </div>

      <div className="shoppingAddress">
        <h2>PICKUP ADDRESS:</h2>
        <p>
          703 lotus business park, <br />
          Mumbai, Maharashtra 400064 India.
        </p>
      </div>

      <div className="shoppingTwoSec">
        <img src={img67} alt="" />
        <p style={{ marginLeft: "5%" }}>
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <button className="shoppingTrack" onClick={() => navigate('/')}>CONTINUE SHOPPING </button>

      {/* -------------------------------------------------------------- */}

      <h1
        style={{
          textAlign: "center",
          fontFamily: "Monument",
          marginTop: "15%",
        }}
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

      <div className="Give" style={{ marginTop: "15%" }}>
        <img src={Give} alt="" />
      </div>

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

export default Accept;
