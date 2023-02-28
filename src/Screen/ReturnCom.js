/** @format */

import React from "react";
import img2 from "../Assets/04.png";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#707070" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "white" , fontFamily : "MonumentMineMine" }}
        >
          Change Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ModalChange">
          <div style={{ border: "1px solid #FF9100" }}>
            <h6>Tanmay</h6>
            <p style={{fontFamily : 'FuturaMine'}}>
              400069,Jamaica, S.V Road, Mumbai <br /> Mob No:- +917736348521
            </p>
          </div>
          <div style={{ borderTop: "none" }}>
            <h6>AL</h6>{" "}
            <p style={{fontFamily : 'FuturaMine'}}>
              07632,Englewood Cliffs, Mumbai <br />
              Mob No:- +919862547896
            </p>
          </div>
          <div>
            <h6> Theglobalgenie</h6>
            <p style={{fontFamily : 'FuturaMine'}}>
              401121, Van Nostrand Ave, Mumbai <br />
              Mob No:- +918757938869
            </p>
          </div>
        </div>
        <p style={{ color: "#187ED6", textDecoration: "underline" }}>
          Add an address
        </p>
        <div className="ModalBtn">
          <button>Cancel</button>
          <button>Ok</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const ReturnCom = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="MyOrderHead">
        {/* <img src={img1} alt="" /> */}
        <h1 style={{ textAlign: "center", display: "block", margin: "auto" , fontFamily : "MonumentMineMine" }}>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3 className="special">All Orders</h3>
        <h3 onClick={() => navigate("/inTransit")}>InTransit</h3>
        <h3 onClick={() => navigate("/orderCancel")}>Cancelled</h3>
        <h3 onClick={() => navigate("/orderSum")}>Buy it Again</h3>
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

      <div className="ReturnCom">
        <div className="left">
          <div className="up">
            <h4 style={{ fontWeight: "bold" }}>Why are you returning this?</h4>
            <p>Product and Shipping box both damaged</p>
          </div>
          <hr />
          <h4>How will you mail your return?</h4>
          <div className="down">
            <img src={img2} alt="" />
            <div style={{ marginTop: "5%" }}>
              <div>
                <h5>Refund to your Visa ending in XXXX </h5>
                <p
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setModalShow(true)}
                >
                  Change
                </p>
              </div>

              <div>
                <h5>400064, Maharashtra Lane, Malad (W)</h5>
                <p style={{ color: "blue", cursor: "pointer" }}>
                  Change address{" "}
                </p>
              </div>
              <div>Refund will be initiated once we receive the product.</div>
            </div>
          </div>
        </div>

        <div className="right">
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => navigate("/accept")}
          >
            CONFIRM YOUR RETURN
          </button>
          <p className="up-p">Return by Feb 1, 2023</p>
          <hr />
          <div>
            <h5
              style={{
                fontFamily: "Futura",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Refund summary
            </h5>
            <div className="new">
              <p>Refund subtotal</p>
              <p>₹ 1,965.00</p>
            </div>
            <hr />
            <div></div>
            <div className="new">
              <p>Total estimated refund </p>
              <p>₹ 1,965.00</p>
            </div>
            <hr />
          </div>
          <div style={{ width: "80px" }}>
            <img src={img2} alt="" width={"100%"} />
          </div>
        </div>
      </div>

      <div className="BanImage" style={{marginTop : '5%'}}>
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
export default ReturnCom;
