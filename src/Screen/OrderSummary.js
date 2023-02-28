/** @format */

import React from "react";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import img2 from "../Assets/Oil.png";
import X from "../Assets/X.png";
import img4 from "../Assets/Group 209.png";
import img5 from "../Assets/61f3tehh6-L._AC_.png";
import img6 from "../Assets/712tvc3j0LL._AC_SL1500_.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate= useNavigate()
  return (
    <>
      <div className="MyOrderHead">
        <h1
          style={{
            textAlign: "center",
            display: "block",
            margin: "auto",
            fontFamily: "MonumentMineMine",
          }}
        >
          ORDER SUMMARY
        </h1>
      </div>

      <div className="OrderSummary">
        <div className="left">
          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt="" />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img
              src={X}
              alt=""
              className="X"
              style={{ float: "right", fontWeight: "bold" }}
            />

            <div className="Under">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5>SOLGAR</h5>
                <p>
                  Solgar B-Complex "100", 100 Vegetable Capsules <br />
                  Non GMO, Vegan, Gluten Free, Dairy Free, <br />
                  Kosher, Halal - 100 Servings.
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,965.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt="" />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img src={X} alt="" className="X" style={{ float: "right" }} />

            <div className="Under" style={{ marginLeft: "6%" }}>
              <div>
                <img src={img5} alt="" />
              </div>
              <div style={{ marginLeft: "3%" }}>
                <h5>DISNEY</h5>
                <p>
                  Disney Vermont Teddy Bear Stuffed Elephant <br /> - Oh So Soft
                  Elephant Stuffed Animal, Plush Toy, Gray, <br />
                  18 Inch
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,150.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt="" />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img src={X} alt="" className="X" style={{ float: "right" }} />

            <div className="Under" style={{ marginLeft: "10%" }}>
              <div>
                <img src={img6} alt="" />
              </div>
              <div>
                <h5>CENTRUM</h5>
                <p>
                  Centrum Adult Multivitamin/Multimineral Supplement <br />
                  with Antioxidants, Zinc, Vitamin D3 and B Vitamins
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,965.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="upper">
            <h5>Subtotal (1)</h5>
            <h5 className="down">₹ 3,115.00</h5>
          </div>

          <div className="upper">
            <div>
              <h5>Shipping</h5>
              <p>USA to INDIA</p>
            </div>
            <div className="down">
              <h5>Free</h5>
              <p>-150</p>
            </div>
          </div>

          <div className="upper">
            <div>
              <h5>Discount</h5>
              <p>FIRSTWISH- 10%</p>
            </div>
            <div>
              <h5>-180</h5>
            </div>
          </div>

          <div className="upper">
            <div>
              <h5>TOTAL</h5>
            </div>
            <div>
              <h5 style={{ textAlign: "right" }}>₹2,765.00</h5>
              <span style={{ fontSize: "0.8rem" }}>
                [ ALL TAXES & IMPORT DUTY INCLUDED ]
              </span>
            </div>
          </div>

          <hr style={{ border: "1px solid black" }} />
          <button onClick={() => navigate("/shopping")}>PROCEED TO CHECKOUT</button>
        </div>
      </div>

      <div className="OrderSummaryDropDown">
        <div className="upper">
          <h5>Subtotal (1)</h5>
          <h5 className="down">₹ 3,115.00</h5>
        </div>

        <div className="upper">
          <div>
            <h5>Shipping</h5>
            <p>USA to INDIA</p>
          </div>
          <div className="down">
            <h5>Free</h5>
            <p>-150</p>
          </div>
        </div>

        <div className="upper">
          <div>
            <h5>Discount</h5>
            <p>FIRSTWISH- 10%</p>
          </div>
          <div>
            <h5>-180</h5>
          </div>
        </div>

        <div className="upper">
          <div>
            <h5>TOTAL</h5>
          </div>
          <div>
            <h5 style={{ textAlign: "right" }}>₹2,765.00</h5>
            <span style={{ fontSize: "0.8rem" }}>
              [ ALL TAXES & IMPORT DUTY INCLUDED ]
            </span>
          </div>
        </div>

        <hr style={{ border: "1px solid black" }} />
        <button onClick={() => navigate("/shopping")}>PROCEED TO CHECKOUT</button>
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

export default OrderSummary;
