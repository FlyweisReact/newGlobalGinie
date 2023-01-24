/** @format */

import React, { useState } from "react";
import img from "../Assets/Search ICon.png";
import img1 from "../Assets/asset1.jpg";
import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const FAQ = () => {
  const [order, setOrder] = useState(false);
  const [product, setProduct] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [refund, setRefund] = useState(false);
  const [retrunn, setReturn] = useState(false);
  const [other, setOther] = useState(false);

  return (
    <>
      <div className="FAQ">
        <h2>ABOUT US & FREQUENTLY ASKED QUESTIONS</h2>
        <p>Search product info, Q&A, reviews</p>
      </div>
      <div className="FAQInput">
        <input type="text" placeholder="Type a Keyword" />
        <img src={img} alt="" />
      </div>

      <div className="FAQtwosec">
        <div className="left">
          <ul>
            <li
              onClick={() => {
                setProduct(true);
                setOrder(false);
                setShipping(false);
                setRefund(false);
                setReturn(false);
                setOther(false);
              }}
            >
              {product ? <strong>Product FAQs</strong> : "Product"}
            </li>
            <li
              onClick={() => {
                setProduct(false);
                setOrder(true);
                setShipping(false);
                setRefund(false);
                setReturn(false);
                setOther(false);
              }}
            >
              {order ? <strong> Ordering FAQs</strong> : " Ordering FAQs"}
            </li>
            <li
              onClick={() => {
                setProduct(false);
                setOrder(false);
                setShipping(true);
                setRefund(false);
                setReturn(false);
                setOther(false);
              }}
            >
              {shipping ? <strong> Shipping FAQs</strong> : "   Shipping FAQs"}
            </li>
            <li
              onClick={() => {
                setProduct(false);
                setOrder(false);
                setShipping(false);
                setRefund(true);
                setReturn(false);
                setOther(false);
              }}
            >
              {refund ? (
                <strong>
                  {" "}
                  Refund & <br /> Cancellation FAQs
                </strong>
              ) : (
                <>
                  Refund & <br /> Cancellation FAQs
                </>
              )}
            </li>
            <li
              onClick={() => {
                setProduct(false);
                setOrder(false);
                setShipping(false);
                setRefund(false);
                setReturn(true);
                setOther(false);
              }}
            >
              {retrunn ? <strong> Return FAQs</strong> : "    Return FAQs"}
            </li>
            <li
              onClick={() => {
                setProduct(false);
                setOrder(false);
                setShipping(false);
                setRefund(false);
                setReturn(false);
                setOther(true);
              }}
            >
              {other ? <strong> Other FAQs</strong> : " Other FAQs"}
            </li>
          </ul>
        </div>
        <div
          style={{
            borderRight: "1px solid black",
            width: "5px",
            minHeight: "80vh",
          }}
          id="forHide"
        ></div>

        <div className="right">
          {product ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>Where do the products come from?</h4>
                  <p style={{ marginTop: "0" }}>
                    The procurement of the products is done from the respective
                    brands.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do you sell genuine products?</h4>
                  <p style={{ marginTop: "0" }}>
                    Yes, we procure the products directly from the brand. You
                    may rest assured that <br />
                    The Global Genie is the ' One Stop Shop' for all your needs.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>
                    Will I get some type of discount when I create an account{" "}
                    <br />
                    and order for the first time from The Global Genie?
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    We have seasonal and festival discounts for all our
                    customers. Same will be <br />
                    updated on the homepage and product page as well. We
                    recommend signing up for our newsletters for easily access
                    to all new updates.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do you provide adapters for electronic products?</h4>
                  <p style={{ marginTop: "0" }}>
                    Yes, a converter will be provided for electronic products.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {order ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>What forms of payment do you accept?</h4>
                  <p style={{ marginTop: "0" }}>
                    We accept debit/credit card, UPI and netbanking as forms of
                    payment.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do you have all the products in stock?</h4>
                  <p style={{ marginTop: "0" }}>
                    The availability of the stock depends on the product. If and
                    when products are out <br />
                    of stock, the same will be displayed on the product pages.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Are all the displayed prices fixed?</h4>
                  <p style={{ marginTop: "0" }}>
                    Yes. We display the total amount on the product page itself.
                    No hidden cost or <br />
                    shipping charges.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do you have any additional delivery charges?</h4>
                  <p style={{ marginTop: "0" }}>
                    No, we do not add any additional charge to your total. The
                    amount you see on the <br />
                    order total is the final amount.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>

              <hr />

              <div className="new">
                <div className="up">
                  <h4>
                    I have a problem with my order. Need to a way to contact{" "}
                    <br />
                    your customer care
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    For order and delivery related queries you can contact us on
                    ABC@gmail.com. You can <br />
                    also directly talk to our human on number - 1234567890
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>
                    Help! Amount has been debited from my debit card but I{" "}
                    <br />
                    have not received the order ID.
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    Order ID is sent to the customer when our bank receives a
                    payment from your bank. <br />
                    Sometimes, due to unforeseen reasons, amount may be debited
                    from your side but <br />
                    not received on our end. You can always talk to our human
                    for quickly solution or send <br />
                    us an email at ABC@gmail.com
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {shipping ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>How long will the delivery take?</h4>
                  <p style={{ marginTop: "0" }}>
                    The delivery takes around 15-18 days. You can enter your
                    location's pincode on the <br />
                    product page to check when you can expect to receive the
                    delivery.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>How do I track my order?</h4>
                  <p style={{ marginTop: "0" }}>
                    You can track your order as soon as it is shipped out. To
                    track your order in real time <br />
                    you can tap on the link provided in the email sent to
                    you/tracking page on the website.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do you have self-collect option?</h4>
                  <p style={{ marginTop: "0" }}>
                    No. We currently do not have any offline stores.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>How much is the shipping cost?</h4>
                  <p style={{ marginTop: "0" }}>
                    We provide free shipping for all products.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>

              <hr />

              <div className="new">
                <div className="up">
                  <h4>Do I have to be present to receive my order?</h4>
                  <p style={{ marginTop: "0" }}>
                    We recommend that you receive the order yourself to ensure
                    complete satisfaction. <br />
                    If in any case you are unable to receive the order, it will
                    be delivered to the person <br />
                    available. The signature of the receiver will be taken at
                    the time of delivery for security <br />
                    and validation.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>Can I cancel shipped order?</h4>
                  <p style={{ marginTop: "0" }}>
                    You can cancel your order 4-5 days prior to shipping. Once
                    it is shipped, you cannot <br />
                    cancel your order. However, you can change your contact
                    details or shipping address <br />
                    until the order is shipped.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>I have received damaged products.</h4>
                  <p style={{ marginTop: "0" }}>
                    You can reach out to our human or email at ABC@gmail.com
                    with the details regarding <br />
                    damaged products. We request you to not accept a package if
                    it is tampered.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {refund ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>In how many days will I receive the refund?</h4>
                  <p style={{ marginTop: "0" }}>
                    The refund duration varies according to the FOP (Form of
                    Payment). We assure you <br />
                    that we will provide hassle-free refund.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>I cannot find the cancel button.</h4>
                  <p style={{ marginTop: "0" }}>
                    It can mean two things: 1. Your order has been shipped and
                    is out for delivery. 2. You <br />
                    may be facing some issues on the website. Do give our human
                    a call for a quickly solution.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {retrunn ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>
                    When can I return the products that I don’t like or have a{" "}
                    <br />
                    problem with?
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    We have a customer friendly return policy. You can return
                    the products within 7 days <br />
                    of delivery as long as the following conditions are met:
                    <ul>
                      <li>
                        Should be unused – Make sure that any smell does not
                        transfer to the product <br />
                        (natural body odour, body deodorant, perfume etc.) when
                        checking for fit and comfort
                      </li>
                      <li>The product should be unwashed</li>
                      <li>
                        Must have brand tags, shoe-box and all original
                        packaging present
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {other ? (
            <>
              <div className="new">
                <div className="up">
                  <h4>
                    I need to contact The Global Genie for another reason.
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    You can contact us for non-product queries through Legal
                    (add a link for the legal page <br />
                    on the word legal )
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />

              <div className="new">
                <div className="up">
                  <h4>
                    Do you provide membership? If yes, then what are <br />
                    the benefits?
                  </h4>
                  <p style={{ marginTop: "0" }}>
                    No, we do not offer any membership. If you get any
                    message/email regarding <br />
                    The Global Genie membership, please refrain from providing
                    personal information <br />
                    and do bring it to our attention by sending an email at ABC
                    @gmail.com.
                  </p>
                </div>
                <div className="down">
                  <img
                    src={img1}
                    alt=""
                    style={{ transform: "rotate(90deg" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}
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

export default FAQ;
