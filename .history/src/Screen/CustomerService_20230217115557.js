/** @format */

import React from "react";
import img from "../Assets/asset1.jpg";
import img67 from "../Assets/518q7cM2t4L._SL1500_.png";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
import { useNavigate } from "react-router-dom";

const CustomerService = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="customerSer">
        <p>Welcome to</p>
        <h6>CUSTOMER SERVICES</h6>
      </div>

      <div className="customerSerHead">
        <p onClick={() => navigate("/allOrders")} style={{ cursor: "pointer" }}>
          Manage your Orders
        </p>
        <img src={img} alt="" />
      </div>

      <hr
        className="myHr"
        style={{
          border: "2px solid black",
          maxWidth: "1400px",
          margin: "auto",
          marginTop: "1%",
        }}
      />


      <div className="shoppingTwoSec">
        <img src={img67} alt="" />
        <div>
          <p style={{ marginLeft: "5%" }}>
            Cosrx Advanced Snail 96 Mucin Power Essence (100ml)
          </p>
          <p style={{ marginLeft: "5%" }}>
            ₹2,965.00
            <br />
            <span style={{ fontSize: "0.7rem", marginTop: "0" }}>
              [ ALL TAXES & IMPORT DUTY INCLUDED ]
            </span>
          </p>

          <h5
            style={{
              marginLeft: "5%",
              fontFamily: "Nexa",
              fontSize: "1.9rem",
              marginTop: "10%",
              color: "#057436",
              fontWeight: "bold",
            }}
          >
            Delivered 11 October
          </h5>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "MonumentMineMine",
          marginTop: "5%",
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

export default CustomerService;
