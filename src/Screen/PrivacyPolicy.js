/** @format */

import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <h1 className="returnRefundP">PRIVACY POLICY</h1>
      <div className="returnRefundPdiv">
        <p>
          We value the trust you place in us and recognize the importance of
          secure transactions and information privacy. <br /> Accordingly, we
          have developed this Policy in order for you to understand how we
          collect, use, communicate, disclose <br /> and make use of personal
          information. The below information outlines our privacy policy:
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>Collection of Your Information</h3>
        <p>
          Before or at the time of collecting personal information, we will
          identify the purpose for which they are being collected for. <br />{" "}
          You can browse through our website without revealing any personal
          information about yourself. However, you will not stay <br />{" "}
          anonymous to us once you give us your personal information. You will
          always have the option to not provide information.
        </p>
        <p>
          We use the information you provide to do internal research on user/s
          demographics, behaviours and interests. We may <br />
          collect personal information (such as email address, delivery address,
          name, phone number, credit card/debit card and <br /> other payment
          instrument details) from you when you set up an account or transact
          with us or participate in any event <br /> or contest.
        </p>
        <p>
          We collect personal information by lawful and fair means – with
          appropriate knowledge and consent of the individual. <br />
          We will protect the provided personal information with security
          safeguards against theft or loss.
        </p>
        <p>
          <strong>Notes</strong> : We will only retain personal information as
          long as necessary for the fulfillment of those purposes.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>Links to Third Parties:</h3>
        <p>
          We may, at our discretion, occasionally include or offer third-party
          products or services on our website. They have separate <br />
          and varied privacy policy. We will therefore not be responsible or
          liable for activities on the linked sites.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>Choice to unsubscribe/opt-out:</h3>
        <p>
          We provide all users the opportunity to opt-out of receiving
          non-essential communication. You can login into the Notification{" "}
          <br />
          Preference page of our platform and unsubscribe/opt-out.
        </p>
      </div>

      <div className="returnRefundPdiv2">
        <h3>Cookies: </h3>
        <p>
          Some of the features of the site will turn off if you disable the
          cookies.
        </p>
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

export default PrivacyPolicy;
