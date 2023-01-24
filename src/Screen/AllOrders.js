/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from "../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png";
import img4 from "../Assets/712tvc3j0LL._AC_SL1500_.png";
import img5 from "../Assets/71k3V8agL-L._AC_SL1500_.png";

import img6 from "../Assets/mastercard_PNG23.png";

import img7 from "../Assets/71ZufDAAwcL._AC_SL1500_.png";

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
import X from "../Assets/X.png";

import { useNavigate } from "react-router-dom";
const AllOrders = () => {
  const navigate = useNavigate()

  function NavigationHandler(data) {
      navigate(data)
  }
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3 className="special">All Orders</h3>
        <h3 onClick={() => NavigationHandler('/inTransit')}>InTransit</h3>
        <h3  onClick={() => NavigationHandler('/orderCancel')}>Cancelled</h3>
        <h3 onClick={() => NavigationHandler('/orderSum')}>Buy it Again</h3>
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

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img2} alt="" />
        </div>
        <div className="second">
          <h5>SOLGAR</h5>
          <p>
            Solgar B-Complex "100", 100 Vegetable Capsules <br />
            Non GMO, Vegan, Gluten Free, Dairy Free, <br />
            Kosher, Halal - 100 Servings.
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
          <p>
            {" "}
            <strong>STATUS :-</strong> Open Order{" "}
            <span style={{ color: "#1F81F1", textDecoration: "underline" }}>
              {" "}
              (50 hours free cancellation){" "}
            </span>
            <br />
            <div className="box">
              <img src={X} alt="" className="X" />
              <p>
                Cancellation window will be <br /> close on{" "}
                <span style={{ fontWeight: "900" }}>November 24, 2022</span>{" "}
              </p>
              <p style={{ fontWeight: "900", fontSize: "19px" }}>50 HOURS</p>
              <p> CANCEL NOW </p>
            </div>
          </p>
        </div>
        <div className="four">
          <button onClick={() => NavigationHandler('/track')} > TRACK PACKAGE </button> <br />
          <button  onClick={() => NavigationHandler('/return')}  className="btn-light"> RETURN OR REFUND </button> <br />
          <button className="btn-light"> LEAVE A FEEDBACK </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img3} alt="" />
        </div>
        <div className="second">
          <h5>DISNEY</h5>
          <p>
            Disney Vermont Teddy Bear Stuffed Elephant - Oh <br />
            So Soft Elephant Stuffed Animal, Plush Toy, Gray, <br />
            18 Inch
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
          <p>
            {" "}
            <strong>STATUS :-</strong> Intransit
          </p>
        </div>
        <div className="four">
          <button   onClick={() => NavigationHandler('/orderSum')} > BUY IT AGAIN</button>
          <br />
          <button  onClick={() => NavigationHandler('/return')} className="btn-light"> RETURN OR REFUND </button> <br />
          <button className="btn-light"> LEAVE A FEEDBACK </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img4} alt="" />
        </div>
        <div className="second">
          <h5>CENTRUM</h5>
          <p>
            Centrum Adult Multivitamin/Multimineral Supplement <br />
            with Antioxidants, Zinc, Vitamin D3 and B Vitamins
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
          <p>
            {" "}
            <strong>STATUS :-</strong> Delivered December 06, 2022 8:15pm
          </p>
        </div>
        <div className="four">
          <button onClick={() => NavigationHandler('/orderSum')}> BUY IT AGAIN</button>
          <br />
          <button  onClick={() => NavigationHandler('/return')} className="btn-light"> RETURN OR REFUND </button> <br />
          <button className="btn-light"> LEAVE A FEEDBACK </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img5} alt="" />
        </div>
        <div className="second">
          <h5>NORDIC NATURALS</h5>
          <p>
            Nordic Naturals Children’s DHA, Strawberry - 360 Mini <br />
            Chewable Soft Gels for Kids - 250 mg Omega-3 with <br />
            EPA & DHA - Brain Development & Function - Non-GMO - <br />
            90 Servings
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
          <p>
            {" "}
            <strong>STATUS :-</strong> Delivered December 06, 2022 8:15pm
          </p>
        </div>
        <div className="four">
          <button className="btn-light"> CHAT WITH US </button> <br />
          <span style={{ fontSize: "14px", textAlign: "center" }}>
            If you require further assistance you may contact us.
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      <h2 className="OrderSum">Invoice ˅ </h2>

      {/* ----------------------------------------------------------- */}

      <div className="OrderSumInvoice">
        <div className="left">
          <h3>Shipping Address</h3>
          <h3>J SYS</h3>
          <p style={{ fontWeight: "500" }}>
            703/ lotus business park ram <br /> baug lane near Indian Oil <br />
            Mumbai, Maharashtra:- 400064
          </p>
        </div>

        <div className="mid">
          <h3>Payment Method</h3>
          <div>
            <img src={img6} alt="" />
            <p className="PIn">****1899</p>
          </div>
        </div>

        <div>
          <div className="right">
            <h5>Subtotal (1)</h5> <h5>₹ 3,115.00</h5>
          </div>

          <div className="right">
            <div>
              <h5>Shipping</h5>
              <p>USA to INDIA</p>
            </div>
            <div>
              <h5>Free</h5>
              <p>-150</p>
            </div>
          </div>

          <div className="right">
            <div>
              <h5>Discount</h5>
              <p>FIRSTWISH- 10%</p>
            </div>
            <div>
              <h5>-180</h5>
            </div>
          </div>

          <div className="right">
            <div>
              <h5>Total</h5>
            </div>
            <div style={{ textAlign: "right" }}>
              <h5>₹ 2,765.00</h5>
              <span style={{ fontSize: "0.8rem" }}>
                [ ALL TAXES & IMPORT DUTY INCLUDED ]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* ----------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img7} alt="" />
        </div>
        <div className="second">
          <h5>MUSCLETECH</h5>
          <p>
            Muscle Builder | Muscle Building Supplements for Men <br />
            & Women Nitric Oxide Booster | Muscle Gainer Workout <br />
            Supplement 400mg of Peak ATP for Enhanced Strength, <br />
            30 Pills.
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
          <p>
            {" "}
            <strong>STATUS :-</strong> Delivered December 06, 2022 8:15pm
          </p>
        </div>
        <div className="four">
          <span style={{ marginLeft: "25%" }}>Need further assistance ?</span>{" "}
          <br />
          <button className="btn-light"> CONTACT US </button>
        </div>
      </div>

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

export default AllOrders;
