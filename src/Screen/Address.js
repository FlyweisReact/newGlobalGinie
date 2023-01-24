/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

const Address = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1> ADDRESSES</h1>
      </div>

      <div
        className="OrderSummary"
        id="MyFormNew"
      >
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

            <button className="newBtn">Create a Account</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Address;
