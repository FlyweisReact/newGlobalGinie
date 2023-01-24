/** @format */

import React from "react";
import Give from "../Assets/Get Me This.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const TermsCondition = () => {
  return (
    <>
      <h1 className="returnRefundP"> TERMS AND CONDITIONS </h1>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>1. Terms</h3>
        <p>
          By accessing this website, you are agreeing to be bound by its Terms
          and Conditions of Use, all applicable laws and regulations, <br /> and
          agree that you are responsible for compliance with any applicable
          local laws. If you do not agree with any of these terms,
          <br /> you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright <br /> and trademark laws.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>2. Use License</h3>
        <p>
          1. Permission is granted to temporarily download one copy of the
          materials (information or software) on Desertcart Trading's <br />
          website for personal, non-commercial transitory viewing only. This is
          the grant of a license, not a transfer of title, and under <br />
          this license you may not:
          <br />
          <ul>
            <li> modify or copy the material;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Desertcart Trading's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or transfer the materials to another person or <br />
              "mirror" the materials on any other server.
            </li>
          </ul>
        </p>
        <p>
          2. This license shall automatically be terminated if you violate any
          of these restrictions and may be terminated by Desertcart <br />{" "}
          Trading at any time. Upon terminating your viewing of these materials
          or upon the termination of this license, you must destroy <br /> any
          downloaded materials in your possession whether in electronic or
          printed format.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>3. Disclaimer</h3>
        <p>
          The materials on Desertcart Trading's website are provided "as is".
          Desertcart Trading makes no warranties, expressed or <br /> implied,
          and hereby disclaims and negates all other warranties, including
          without limitation, implied warranties or conditions <br /> of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights. <br /> Further,
          Desertcart Trading does not warrant or make any representations
          concerning the accuracy, likely results, or reliability <br /> of the
          use of the materials on its Internet web site or otherwise relating to
          such materials or on any sites linked to this site
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>4. Limitations </h3>
        <p>
          In no event shall Desertcart Trading or its suppliers be liable for
          any damages (including, without limitation, damages for loss of <br />{" "}
          data or profit, or due to business interruption,) arising out of the
          use or inability to use the materials on Desertcart Trading's <br />{" "}
          Internet site, even if Desertcart Trading or a Desertcart Trading
          authorized representative has been notified orally or in writing{" "}
          <br /> of the possibility of such damage. Because some jurisdictions
          do not allow limitations on implied warranties, or limitations of
          <br /> liability for consequential or incidental damages, these
          limitations may not apply to you.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>5. Revisions and Errata </h3>
        <p>
          The materials appearing on Desertcart Trading's website could include
          technical, typographical, or photographic errors. Desertcart <br />{" "}
          Trading does not warrant that any of the materials on its web site are
          accurate, complete, or current. Desertcart Trading may <br /> make
          changes to the materials contained on its web site at any time without
          notice. Desertcart Trading does not, however, make <br /> any
          commitment to update the materials.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>6. Links </h3>
        <p>
          Desertcart Trading has not reviewed all of the sites linked to its
          Internet web site and is not responsible for the contents of any{" "}
          <br /> such linked site. The inclusion of any link does not imply
          endorsement by Desertcart Trading of the site. Use of any such linked{" "}
          <br /> website is at the user's own risk.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>7. Site Terms of Use Modifications </h3>
        <p>
          Desertcart Trading may revise these terms of use for its website at
          any time without notice. By using this website, you are <br />{" "}
          agreeing to be bound by the current version of the Terms and
          Conditions of Use.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>8. Communication </h3>
        <p>
          When you use our service, send e-mails, text messages, or other
          communications from your desktop or mobile device to us, <br /> you
          are communicating with us electronically. You consent to receive
          communications from us electronically, such as e-mails, <br /> SMS
          messages, mobile push notices, or notices and messages on this site,
          and you can retain copies of these communications <br /> for your
          records. By registering to our service, you may also receive
          communications regarding news, products, offerings and <br />{" "}
          newsletters relating to our website. You may unsubscribe to
          promotional emails by clicking the Unsubscribe link on your email or{" "}
          <br /> in your account page. You may not unsubscribe to transactional
          emails that have important information regarding your order(s) <br />{" "}
          or account.
        </p>
      </div>

      <div className="returnRefundPdiv2" >
        <h3>9. Governing Law </h3>
        <p>
          Any claim relating to desertcart’s Trading website outside GCC will be
          governed by the laws of United Kingdom without regard <br /> to its
          conflict of law provisions.
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

export default TermsCondition;
