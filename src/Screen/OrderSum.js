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

import { useNavigate } from "react-router-dom";


const OrderSum = () => {

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
        <h3  onClick={() => NavigationHandler('/allOrders')} >All Orders</h3>
        <h3 onClick={() => NavigationHandler('/inTransit')}>InTransit</h3>
        <h3  onClick={() => NavigationHandler('/orderCancel')} >Canceled</h3>
        <h3 className="special">Buy it Again</h3>
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
            Solgar B-Complex "100", 100 Vegetable Capsules Non GMO, Vegan,
            Gluten Free, Dairy Free, Kosher, Halal - 100 Servings.
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
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
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
            Disney Vermont Teddy Bear Stuffed Elephant - Oh So Soft Elephant
            Stuffed Animal, Plush Toy, Gray, 18 Inch
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
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
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
            Centrum Adult Multivitamin/Multimineral Supplement with
            Antioxidants, Zinc, Vitamin D3 and B Vitamins
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
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
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
            Nordic Naturals Children’s DHA, Strawberry - 360 Mini Chewable Soft
            Gels for Kids - 250 mg Omega-3 with EPA & DHA - Brain Development &
            Function - Non-GMO - 90 Servings
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
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
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
            Nordic Naturals Children’s DHA, Strawberry - 360 Mini Chewable Soft
            Gels for Kids - 250 mg Omega-3 with EPA & DHA - Brain Development &
            Function - Non-GMO - 90 Servings
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
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}


      <h1 style={{ textAlign: "center", fontFamily: "Monument"  , marginTop : '15%'}}>
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

export default OrderSum;
