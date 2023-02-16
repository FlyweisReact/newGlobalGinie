/** @format */

import React from "react";
import img1 from "../Assets/+.png";

import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const YourAddress = () => {
  const navigate = useNavigate();

  function RedirectFunc(link) {
    navigate(link);
  }

  return (
    <>
      <h2 className="your-add">YOUR ADDRESSES</h2>

      <div className="your-add-threeSec">
        <div
          style={{
            border: "1px dashed  black",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bolder",
            fontFamily: "MonumentMine",
            color: "grey",
          }}
        >
          <img
            src={img1}
            alt=""
            width={"20%"}
            style={{ marginTop: "10%", cursor: "pointer" }}
            onClick={() => RedirectFunc("/address")}
          />
          <p
            style={{ cursor: "pointer" }}
            onClick={() => RedirectFunc("/address")}
          >
            Add Address
          </p>
        </div>
        <div className="mid">
          <span>Default</span>
          <hr style={{ width: "90%", marginLeft: "10px" }} />
          <h6 style={{ fontWeight: "bolder" }}>Tanmay Pandya</h6>
          <p style={{ fontSize: "1rem", fontFamily: "Nexa" }}>
            707lotus buisness park , rema bagh lane <br />
            off S V Road Malad West ,
            <br />
            MUMBAi , MAHARASHTRA 400064 India.
            <br />
            Phone Number: +914512368796
          </p>
          <div className="DownBTns" style={{ border: "none" }}>
            <p>Edit</p>
            <div
              style={{
                width: "1px",
                height: "30px",
                border: "none",
                backgroundColor: "black",
              }}
            ></div>
            <p>Remove</p>
          </div>
        </div>
        <div className="mid">
          <h6 style={{ fontWeight: "bolder", marginTop: "15%" }}>AL</h6>
          <p style={{ fontSize: "1rem", fontFamily: "Nexa" }}>
            707lotus buisness park , rema bagh lane <br />
            off S V Road Malad West ,
            <br />
            MUMBAi , MAHARASHTRA 400064 India.
            <br />
            Phone Number: +914512368796
          </p>
          <div
            className="DownBTns"
            style={{ border: "none", marginTop: "15%" }}
          >
            <p>Edit</p>
            <div
              style={{
                width: "1px",
                height: "30px",
                border: "none",
                backgroundColor: "black",
              }}
            ></div>
            <p>Remove</p>
            <div
              style={{
                width: "1px",
                height: "30px",
                border: "none",
                backgroundColor: "black",
              }}
            ></div>
            <p>Set as Default</p>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "MonumentMine",
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

export default YourAddress;
