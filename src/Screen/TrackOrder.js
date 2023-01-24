/** @format */

import React, { useState } from "react";
import img1 from "../Assets/asset1.png";
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
import img6 from "../Assets/mastercard_PNG23.png";
import { Modal } from "react-bootstrap";
import img7 from "../Assets/71ZufDAAwcL._AC_SL1500_.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h2 className="OrderSum">Invoice ˅ </h2>

        {/* ----------------------------------------------------------- */}

        <div
          className="OrderSumInvoice"
          style={{ width: "100%", marignLeft: "0", margin: "0" }}
        >
          <div className="left">
            <h3>Shipping Address</h3>
            <h3>J SYS</h3>
            <p style={{ fontWeight: "500" }}>
              703/ lotus business park ram <br /> baug lane near Indian Oil{" "}
              <br />
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

        <h2 className="OrderSum" style={{ margin: "0", marginTop: "5%" }}>
          View Order Summary
        </h2>
        <hr
          className="MyOrderHr"
          style={{ margin: "0", width: "100%", marginBottom: "2%" }}
        />

        <div className="OrderSumSection" style={{ width: "100%", margin: "0" }}>
          <div className="first">
            <img src={img7} alt="" />
          </div>
          <div
            className="second"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            <h5>MUSCLETECH</h5>
            <p>
              Nordic Naturals Children’s DHA, Strawberry - 360 Mini Chewable
              Soft Gels for Kids - 250 mg Omega-3 with EPA & DHA - Brain
              Development & Function - Non-GMO - 90 Servings
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
      </Modal.Body>
    </Modal>
  );
}

const TrackOrder = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [show, setShow] = useState(false);

  const [fill, setFill] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <div className="SS">
          <p>Order Id/Tracking Number</p>
          <div>
            <input
              type="text"
              onChange={() => {
                setFill(true);
              }}
            />
            {fill ? (
              <button onClick={() => setShow(true)}>Track</button>
            ) : (
              <button
                style={{
                  backgroundColor: "#d8d8d8",
                  color: "black",
                  border: "1px solid #d8d8d8",
                }}
              >
                Track
              </button>
            )}
          </div>
        </div>
      </div>

      {show ? (
        <>
          <div className="StatusRefund">
            <h2>Arriving May 11 - May 12</h2>
          </div>

          <hr
            style={{
              width: "80%",
              marginLeft: "10%",
              border: "2px solid #414141",
            }}
          />

          <div className="StatusRefundBox">
            <div className="left">
              <div className="second" style={{ marginTop: 0 }}>
                <div className="Fir" style={{ marginTop: 0 }}>
                  <div
                    style={{
                      width: "30px",
                      marginTop: "5px",
                      height: "30px",
                      backgroundColor: "#24a73f",
                      borderRadius: "100%",
                    }}
                  ></div>
                  <div className="Second">
                    <h2>Order Placed</h2>{" "}
                    <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                      Fri, 26th Apr-11:59am
                    </span>
                  </div>
                </div>
                <div className="New">
                  <div
                    style={{
                      width: "5px",
                      height: "200px",
                      backgroundColor: "#24a73f",
                    }}
                  ></div>
                  <p style={{ color: "grey" }}> 1245789654</p>
                </div>
              </div>

              <div className="second" style={{ marginTop: "5px" }}>
                <div className="Fir">
                  <div
                    style={{
                      width: "30px",
                      marginTop: "5px",
                      height: "30px",
                      backgroundColor: "#24a73f",
                      borderRadius: "100%",
                    }}
                  ></div>
                  <div className="Second">
                    <h2>Indian Custom Clearance</h2>{" "}
                    <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                      Fri, 26th Apr-11:59am
                    </span>
                  </div>
                </div>
                <div className="New">
                  <div
                    style={{
                      width: "5px",
                      height: "200px",
                      backgroundColor: "#24a73f",
                    }}
                  ></div>
                  <p style={{ color: "grey" }}> 1245789654</p>
                </div>
              </div>

              <div className="second" style={{ marginTop: "5px" }}>
                <div className="Fir">
                  <div
                    style={{
                      width: "30px",
                      marginTop: "5px",
                      height: "30px",
                      backgroundColor: "#24a73f",
                      borderRadius: "100%",
                    }}
                  ></div>
                  <div className="Second">
                    <h2>Recieved at TGG INDIA HUB</h2>{" "}
                    <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                      Fri, 26th Apr-11:59am
                    </span>
                  </div>
                </div>
                <div className="New">
                  <div
                    style={{
                      width: "5px",
                      height: "200px",
                      backgroundColor: "#000000",
                    }}
                  ></div>
                  <p style={{ color: "grey" }}> 1245789654</p>
                </div>
              </div>
              <div className="second" style={{ marginTop: "5px" }}>
                <div className="Fir">
                  <div
                    style={{
                      width: "30px",
                      marginTop: "5px",
                      height: "30px",
                      backgroundColor: "#000000",
                      borderRadius: "100%",
                    }}
                  ></div>
                  <div className="Second">
                    <h2>LastMile Delivery</h2>{" "}
                    <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                      Fri, 26th Apr-11:59am
                    </span>
                  </div>
                </div>
                <div className="New">
                  <div
                    style={{
                      width: "5px",
                      height: "200px",
                      backgroundColor: "#000000",
                    }}
                  ></div>
                  <p style={{ color: "grey" }}>
                    {" "}
                    1245789654{" "}
                    <span style={{ color: "#6bc8ef", fontSize: "1rem" }}>
                      {" "}
                      ( HyperLink of bluedart services ){" "}
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="second" style={{ marginTop: "5px" }}>
                <div className="Fir">
                  <div
                    style={{
                      width: "30px",
                      marginTop: "5px",
                      height: "30px",
                      backgroundColor: "#000000",
                      borderRadius: "100%",
                    }}
                  ></div>
                  <div className="Second">
                    <h2>Delivered</h2>{" "}
                  </div>
                </div>
                <div className="New">
                  <p style={{ color: "grey", marginLeft: "5%" }}> 1245789654</p>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="boxs">
                <h2>Address Info :</h2>
                <div>
                  <h3>Tanmay</h3>
                  <p>
                    400069 ,jamaica , S.V Road , Mumbai <br />
                    Mob No:- +91123456790
                  </p>
                </div>
              </div>
              <div className="boxs2">
                <h2>Order Info :</h2>
                <div>
                  <h3
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  >
                    View Order Details
                  </h3>
                  <h4>Cancel Order</h4>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

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

export default TrackOrder;
