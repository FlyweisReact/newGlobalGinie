/** @format */

import React, { useState } from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from "../Assets/Vitamin C.png";
import img4 from "../Assets/618-39BSrgL._SL1500_.png";
import img5 from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";

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

import img90 from "../Assets/exclamation-mark-symbol-warning-dangerous-icon-on-white-background-free-vector.png";

import img100 from "../Assets/New 10.png";
import { useNavigate } from "react-router-dom";

const Return = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  function Show(data) {
    const target = document.getElementById(data);
    target.style.display = "block";
  }

  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3 className="special">All Orders</h3>
        <h3 onClick={() => navigate("/inTransit")}>InTransit</h3>
        <h3 onClick={() => navigate("/orderCancel")}>Cancelled</h3>
        <h3 onClick={() => navigate("/orderSum")}>Buy it Again</h3>
      </div>

      <div className="MyOrderPlaced">
        <h2>
          {" "}
          <span style={{ fontWeight: "700" }}>18 orders </span> placed in{" "}
        </h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <hr className="MyOrderHr" />

      <div className="return">
        <h4>RETURN OR REFUND</h4>
      </div>

      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} onClick={() => setCheck(!check)} />
          <img src={img2} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select onClick={() => Show("first")}>
              <option>Choose a response</option>
              <option>Item Defective or Doesn't Work.</option>
              <option>Product and Shipping box both damaged</option>
              <option>Missing or Broken Parts.</option>
              <option>Wrong item was Sent.</option>
              <option>Others.</option>
            </select>

            <div style={{ marginTop: "5%", display: "none" }} id="first">
              <label style={{ textAllign: "left" }}>Comments (required):</label>{" "}
              <br />
              <textarea
                style={{ width: "100%", borderRadius: "5px", padding: "10px" }}
              />{" "}
              <br />
              <span>
                NOTE: Do not include personal information as these comments may
                be shared with external service providers to identify product
                defects.
              </span>
            </div>
          </div>
        </div>

        <div className="right">
          {check ? (
            <button
              style={{ backgroundColor: "black" }}
              onClick={() => navigate("/ReturnCom")}
            >
              CONTINUE
            </button>
          ) : (
            <button>CONTINUE</button>
          )}

          <hr style={{ width: "80%", marginLeft: "10%" }} />

          <div>
            <img src={img3} alt="" className="MyOrder-img" />
            <img src={img4} alt="" className="MyOrder-img" />
            <img src={img5} alt="" className="MyOrder-img" />
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
        className="MyOrderhrNew"
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} onClick={() => setCheck(!check)} />
          <img src={img4} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select onClick={() => Show("second")}>
              <option>Choose a response</option>
              <option>Item Defective or Doesn't Work.</option>
              <option>Product and Shipping box both damaged</option>
              <option>Missing or Broken Parts.</option>
              <option>Wrong item was Sent.</option>
              <option>Others.</option>
            </select>
            <div style={{ marginTop: "5%", display: "none" }} id="second">
              <label style={{ textAllign: "left" }}>Comments (required):</label>{" "}
              <br />
              <textarea
                style={{ width: "100%", borderRadius: "5px", padding: "10px" }}
              />{" "}
              <br />
              <span>
                NOTE: Do not include personal information as these comments may
                be shared with external service providers to identify product
                defects.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <img src={img100} alt="" style={{ marginLeft: "2%" }} />
          <div className="desc">
            <h2>COSRX</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>
              <img src={img90} alt="" /> This item isn't eligible for return{" "}
            </h3>
            <button onClick={() => navigate("/returnRefundPolicy")}>
              See Return Policy{" "}
            </button>
            <br />
            <span>If you require further assistance you may contact us</span>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} onClick={() => setCheck(!check)} />
          <img src={img5} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select onClick={() => Show("third")}>
              <option>Choose a response</option>
              <option>Item Defective or Doesn't Work.</option>
              <option>Product and Shipping box both damaged</option>
              <option>Missing or Broken Parts.</option>
              <option>Wrong item was Sent.</option>
              <option>Others.</option>
            </select>

            <div style={{ marginTop: "5%", display: "none" }} id="third">
              <label style={{ textAllign: "left" }}>Comments (required):</label>{" "}
              <br />
              <textarea
                style={{ width: "100%", borderRadius: "5px", padding: "10px" }}
              />{" "}
              <br />
              <span>
                NOTE: Do not include personal information as these comments may
                be shared with external service providers to identify product
                defects.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="MyOrder2">
        {check ? (
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => navigate("/ReturnCom")}
          >
            CONTINUE
          </button>
        ) : (
          <button>CONTINUE</button>
        )}
        <hr style={{ width: "80%", marginLeft: "10%" }} />

        <div>
          <img src={img3} alt="" className="MyOrder-img" />
          <img src={img4} alt="" className="MyOrder-img" />
          <img src={img5} alt="" className="MyOrder-img" />
        </div>
      </div>

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

      <div className="Give">
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

export default Return;
