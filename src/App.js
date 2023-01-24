/** @format */

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";
import NavBar from "./Component/NavBar";
import Return from "./Screen/Return";
import Address from "./Screen/Address";
import AllOrders from "./Screen/AllOrders";
import AllProduct from "./Screen/AllProduct";
import Baby from "./Screen/Baby";
import CancelOrder from "./Screen/CancelOrder";
import Gym from "./Screen/Gym";
import Home from "./Screen/Home";
import HomeScreen from "./Screen/HomeScreen";
import Life from "./Screen/Life";
import Mens from "./Screen/Mens";
import OrderSum from "./Screen/OrderSum";
import OrderSummary from "./Screen/OrderSummary";
import PageNotFound from "./Screen/PageNotFound";
import Perfume from "./Screen/Perfume";
import Shopping from "./Screen/Shopping";
import Shoppingbag from "./Screen/Shoppingbag";
import SingleProduct from "./Screen/SingleProduct";
import Tech from "./Screen/Tech";
import Transit from "./Screen/Transit";
import Accept from "./Screen/Accept";
import Status from "./Screen/Status";
import TrackOrder from "./Screen/TrackOrder";
import YourAddress from "./Screen/YourAddress";
import Profile from "./Screen/Profile";
import CustomerService from "./Screen/CustomerService";
import ReturnRefund from "./Screen/ReturnRefund";
import PrivacyPolicy from "./Screen/PrivacyPolicy";
import TermsCondition from "./Screen/TermsCondition";
import Facial from "./Screen/Facial";
import FAQ from "./Screen/FAQ";
import ReturnCom from "./Screen/ReturnCom";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BrowserRouter>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/second" element={<Baby />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/Per" element={<Perfume />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/life" element={<Life />} />
          <Route path="/single" element={<SingleProduct />} />

          <Route path="/orderSum" element={<OrderSum />} />
          <Route path="/orderCancel" element={<CancelOrder />} />
          <Route path="/inTransit" element={<Transit />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/OrderS" element={<OrderSummary />} />
          <Route path="/address" element={<Address />} />
          <Route path="/shoppingBag" element={<Shoppingbag />} />
          <Route path="/allProduct" element={<AllProduct />} />

          <Route path="/return" element={<Return />} />
          <Route path="/accept" element={<Accept />} />
          <Route path="/sta" element={<Status />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/YourAdd" element={<YourAddress />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/customerService" element={<CustomerService />} />

          <Route path="/returnRefundPolicy" element={<ReturnRefund />} />
          <Route path="/PP" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/facial" element={<Facial />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/ReturnCom" element={<ReturnCom />} />

          {/* 404 Page  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
