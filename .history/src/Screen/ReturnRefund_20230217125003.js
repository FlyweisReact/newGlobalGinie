/** @format */

import React from "react";


import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import newImg12 from "../Images/GET ME THIS Desktop.jpg";

const ReturnRefund = () => {
  return (
    <>
      <h1 className="returnRefundP">RETURNS & REFUNDS POLICY</h1>
      <div className="returnRefundPdiv">
        <p>
          All our products at The Global Genie are new and in their original
          packaging. However, problems or defects may occur <br /> due to
          manufacturing or logistics errors. We will do our best to resolve
          these issues. As some of our products have <br /> international
          warranty, you can contact us and we will assist you in case of
          manufacturing defects.{" "}
        </p>
        <p>
          We will issue a full refund if you are unsatisfied will our products
          for any reason. It is however mandatory for you to return <br /> the
          products to us in its original packaging, including all
          accessories/manuals of the said product.
        </p>
      </div>

      <div className="returnRefundPdiv2">
        <h3>The below items cannot be refunded once opened or used:</h3>
        <p>
          Undergarments, software, grocery, products with missing serial
          numbers, personal grooming products, some <br />
          food products, etc
        </p>
        <p>
          We may need to request a photo or a short video showing the
          defect/damage on the products received, as it is <br />a requirement
          from merchants for refund/replacement and quality purposes.{" "}
        </p>
        <p>
          You can request a refund by contacting our HUMAN or sending an email
          to ABC@TGG.com
        </p>
        <p>
          The refund/s will be processed once the product/s is received by us.{" "}
          <br />
          The refund/s may take 4-6 business days to reflect on your
          credit/debit card statement.
        </p>
        <p>We hope you will an enjoyable experience shopping with us!</p>
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

export default ReturnRefund;
