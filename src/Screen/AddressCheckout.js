/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const AddressCheckout = () => {
  const navigate = useNavigate();
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
          ADDRESSES
        </h1>
      </div>

      <div className="OrderSummary" style={{ marginTop: "0" }}>
        <div className="left">
          <div className="LeftForm">
            <div>
              <label>Country/Region</label>
              <br />
              <select
                style={{
                  backgroundColor: "#D9DADA",
                  border: "1px solid #707070",
                }}
              >
                <option></option>
              </select>
            </div>

            <div>
              <label>Full Name</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Mobile Number</label>
              <br />
              <input type={"number"} />
            </div>

            <div>
              <label>User Name</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Password</label>
              <br />
              <input type={"password"} />
            </div>

            <div>
              <label>Pincode</label>
              <br />
              <input type={"number"} placeholder="6 digits (0-9) PIN code" />
            </div>

            <div>
              <label>Flat House no, Building, Company, Apartment</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Area, Street, Sector, village</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Landmark</label>
              <br />
              <input type={"password"} />
            </div>

            <div className="mix">
              <div>
                <label>Town/city</label>
                <input type="text"></input>
              </div>
              <div>
                <label>State</label>
                <select
                  style={{
                    backgroundColor: "#D9DADA",
                    border: "1px solid #707070",
                    color: "#7E7E7E",
                  }}
                >
                  <option>Choose a state</option>
                </select>
              </div>
            </div>

            <div className="check">
              <div>
                <input type={"checkbox"} />
              </div>
              <h5>
                Make this my default address and save it for further purchases.
              </h5>
            </div>

            <div>
              <label>Address Type</label>
              <br />
              <select
                style={{
                  backgroundColor: "#D9DADA",
                  border: "1px solid #707070",
                }}
              >
                <option>Select an Address Type</option>
              </select>
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
          <button onClick={() => navigate("/OrderS")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <button className="specialLastBtn">Create a Account</button>
    </>
  );
};

export default AddressCheckout;
