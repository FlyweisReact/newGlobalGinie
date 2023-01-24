/** @format */

import React from "react";
import Cam from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import Carioke from "../Assets/Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 2933.png";
import Watch from "../Assets/71LKSq7g51L._AC_SL1500_.png";
import Bud from "../Assets/61tE7IcuLmL._SL1500_.png";
import { Card } from "react-bootstrap";

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

import img1 from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import img2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import img3 from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import img4 from "../Assets/719xFB+eo6L._SL1500_.png";
import img5 from '../Assets/Cetaphil Baby Daily Moisturizing Lotion 400ml with Organic Calendula for Face & Body, Moisturizer for Kids.png'

import img6 from '../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png'
import img7 from '../Assets/clock.png'
import img8 from '../Assets/Comotomo 8 Ounce Baby Bottle, Pack of 2 (Green).png'
import img9 from '../Assets/Chicco Natural Sensation Face Cream, Mother’s Womb Like Care, 0m+ (50 ml).png'
import im10 from '../Assets/10.png'

import img11 from '../Assets/12.png'
import img12 from '../Assets/11.png'

const AllProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="product" style={{ marginTop: "10%" }}>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Cam} alt="" className="camera" />
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
            <img src={Carioke} alt="" className="carioke" />
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
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />
      <div className="product" style={{ marginTop: "10%" }}>
        <Card className="ProductCard">
          <Card.Body>
            <img src={img1} alt="" />
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

        <Card className="ProductCard" style={{ width: "350px" }}>
          <Card.Body>
            <img src={img2} alt="" style={{ marginTop: "10%" }} />
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
            <img src={img3} alt="" />
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
        <Card className="ProductCard" style={{ width: "370px" }}>
          <Card.Body>
            <img
              src={img4}
              alt=""
              style={{ marginTop: "5%",  }}
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
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />
      <div className="product" style={{ marginTop: "10%" }}>
        <Card className="ProductCard">
          <Card.Body>
            <img src={img5} alt="" />
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
            <img src={img6} alt="" />
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
            <img src={img7} alt="" style={{marginTop : '10%'}} />
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
            <img src={img8} alt="" />
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
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />
      <div className="product" style={{ marginTop: "10%" }}>
        <Card className="ProductCard" style={{width : '340px'}}>
          <Card.Body>
            <img src={img9} alt="" />
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
            <img src={im10} alt="" />
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
        <Card className="ProductCard" style={{width : '350px'}}>
          <Card.Body>
            <img src={img11} alt="" />
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
        <Card className="ProductCard" style={{width : '360px'}}>
          <Card.Body>
            <img src={img12} alt="" />
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

export default AllProduct;
