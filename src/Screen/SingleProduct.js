/** @format */

import React, { useEffect } from "react";
import Oil from "../Assets/Solgar, Omega-3 EPA & DHA, Triple Strength, 950 mg, 100 Softgels.jpg";
import Rating from "../Assets/Ratings.png";
import thumn from "../Assets/01.png";
import img from "../Assets/02.png";
import img1 from "../Assets/03.png";
import img2 from "../Assets/Veg logo.png";

import amazon from "../Assets/Amazon Logo.png";
import plus from "../Assets/+.png";

import { Card } from "react-bootstrap";
import Cam from "../Assets/71alqv3malL._AC_SL1500_.png";
import Carioke from "../Assets/71S1iyEXKDL._AC_SL1500_.png";
import Watch from "../Assets/613YK8c2feL._AC_SL1500_.png";
import Bud from "../Assets/61CamQi7vLL._AC_SL1500_.png";

import img50 from "../Assets/Mask Group 8.png";

import img52 from "../Assets/02.jpg";

import Oil2 from "../Assets/Oil.png";
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

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="SingleP">
        <div className="nnn">
          <div className="BP">
            <img src={Oil} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            {" "}
            <img src={thumn} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img1} alt="" className="img-thumbnail img-fluid" />
          </div>
        </div>
        <div className="mid">
          <img src={Oil} alt="" />
        </div>
        <div className="right">
          <div className="left"></div>
          <div className="mid">
            <h2>
              Solgar Glucosamine, Hyaluronic Acid, Chondroitin and MSM
              <br />
              Tablets 120 Tablets
            </h2>
            <div className="ratingP">
              <div>
                <h3>₹2,965.00</h3>
                <span style={{ fontSize: "10px" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
              <div
                style={{ borderRight: "1px solid black", height: "50px" }}
              ></div>
              <img src={Rating} alt="" />
            </div>

            <div className="hi">
              <div className="dd"> ADD TO CART </div>
              <div className="dd"> BUY NOW </div>
            </div>

            <div className="Deliver">
              <h6>ESTIMATED DELIVERY FROM USA TO INDIA</h6>
              <div>
                <p>MONDAY</p>
                <p>SEP 20</p>
                <p>2021</p>
              </div>
            </div>
            <div className="vegLogo">
              <div className="first">
                <img src={img2} alt="" />
                <p>This is a vegetarian product.</p>
              </div>
              <div className="second">
                <p>
                  Free Of: Gluten, wheat, dairy, soy, yeast,sugar, artificial
                  flavour, sweetener,
                  <br />
                  preservatives and color.
                </p>
                <p>
                  Wheat & Dairy Free. Non-GMO and Certified Gluten Free Shell
                  fish-Free
                  <br />
                  FSSAI Importer Licence no:10017022006293
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="amazon">
        <h2>YOU CAN ALSO BUY FROM US @</h2>
        <div>
          <img src={amazon} alt="" />
        </div>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />

      <p className="Tog">FREQUENTLY BOUGHT TOGETHER</p>
      <div className="Syrup">
        <div className="ImagesS">
          <img src={Oil} alt="" className="SyrupImg" />
        </div>
        <div>
          <img src={plus} alt="" className="plus" />
        </div>
        <div className="ImagesS">
          <img src={Oil} alt="" className="SyrupImg" />
        </div>

        <div className="amount">
          <h3>₹3,965.00</h3>
          <span style={{ fontSize: "10px" }}>
            [ ALL TAXES & IMPORT DUTY INCLUDED ]
          </span>
          <div className="hi">
            <div className="dd"> ADD TO CART </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />
      <div className="pro">
        <h1>SIMILAR PRODUCTS</h1>
        <button>View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={Cam} alt="" />
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
            <img src={Carioke} alt="" />
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
            <img src={Watch} alt="" />
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
            <img src={Bud} alt="" />
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
        <p style={{ paddingLeft: "15px" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "50px" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "80px" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "50px" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />

      <div className="pro">
        <h1 style={{ fontWeight: "100" }}>PRODUCT INFORMATION</h1>
      </div>
      <div className="technI">
        <p>Technical Details</p>
      </div>

      <div className="TB">
        <div className="left">
          <p>MANUFACTURER</p>
          <p>COUNTRY OF ORIGIN</p>
          <p>ITEM MODEL NUMBER</p>
          <p style={{ border: "none" }}>PRODUCT DIMENSIONS</p>
        </div>
        <div className="right">
          <p>SOLGAR</p>
          <p>USA</p>
          <p>30185</p>
          <p style={{ border: "none", paddingBottom: "2px" }}>
            6.88 x 6.88 x 12.65 cm; 426.38 Grams
          </p>
        </div>
      </div>
      <div className="technI">
        <p>Additional Information</p>
      </div>

      <div className="TB">
        <div className="left">
          <p>MANUFACTURER</p>
          <p>ITEM WEIGHT</p>
          <p>ITEM DIMENSIONS LXWXH</p>
          <p style={{ border: "none" }}>NET QUANTITY</p>
        </div>
        <div className="right">
          <p>SOLGAR</p>
          <p>426g</p>
          <p>6.9 X 6.9 X 12.6 Centimeters</p>
          <p style={{ border: "none", paddingBottom: "2px" }}>1.00 Count</p>
        </div>
      </div>

      <div className="technI">
        <p style={{ marginBottom: "0" }}>Product Description</p>
        <h6>
          Solgar Glucosamine, Hyaluronic Acid, Chondroitin and MSM Tablets 120
          Tablets Extra Strength Shellfish-Free Non-GMO Gluten, Wheat & Dairy
          Free Certified Gluten Free Dietary Supplement Regenasure Glucosamine
          Made With BioCell Collagen Opti MSM.
        </h6>
      </div>
      <div className="technI" style={{ marginTop: "5%" }}>
        <p style={{ marginBottom: "0" }}>Important Information</p>
        <h6>
          Safety Information: Not intended for use by pregnant or lactating
          women. If you are on any medication, consult your doctor before use.
          Avoid this if you are allergic. Discontinue use and consult your
          doctor or healthcare professional if any adverse reaction occur. Keep
          out of reach of children. Store in a cool dry place. Do not use if
          outer bottle seal is missing, torn or damaged in any way. There are no
          guarantees that every person using this product / service will see the
          expected results for sure. Results depend on a lot of factors and the
          results may vary from person to person.
        </h6>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />

      <div className="ProductReviews">
        <p className="head">CUSTOMER REVIEWS</p>

        <div className="CR">
          <div>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star"></i>
            <p>BARIS OEZGUEN</p>
            <span>Reviewed in India on 26 June 2021</span>
          </div>
          <div>
            <img src={img50} alt="" />
          </div>
        </div>
        <h3>You can find the difference after using this.</h3>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />

      <div className="ProductReviews">
        <div className="CR">
          <div>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#FF9529" }}></i>
            <i class="fa-solid fa-star"></i>
            <p>OLLE NILESON</p>
            <span>Reviewed in the United States on 21 August 2021</span>
          </div>
          <div>
            <img src={img52} alt="" />
          </div>
        </div>
        <h3>
          Know how I know it works? If I stop taking it everything starts
          hurting again!!! That's a pretty good sign that this is doing
          something. Ran out twice before and couldn't wait until the next
          bottle arrived. The turmeric stuff everyone talked about did nothing
          for me, as did all the joint supplements I tried before. Had low
          expectations for this, but very thankful that I found it.... this does
          work and is way cheaper than that other stuff! If I found it earlier I
          may have avoided some joint replacements in my hands and feet.
          Abused/wore out my body due to college varsity sports, boxing, mma,
          commercial fishing in Alaska, mountaineering, skateboarding, building
          etc....and paying for it later in life. I wasn't as indestructible as
          I thought. I could stand up to the hard impacts, it's the years of
          wear and tear that is breaking me down. This lets me keep on rolling.
          Hope that science in the near future can grow new joints for me where
          I have artificial ones now! Until that time I'll be taking these.
        </h3>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "Monument",
          marginTop: "10%",
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
          <img src={Oil2} alt="" />
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

export default SingleProduct;
