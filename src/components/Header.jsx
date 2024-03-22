import React from "react";
import Navbar from "./Navbar";
import image from "../assets/MapNew.svg";
import play from "../assets/Play.svg";
import star from "../assets/Star.svg";
import logo1 from "../assets/Shopify.svg";
import logo2 from "../assets/Paypal.svg";
import logo3 from "../assets/Samsung.svg";
import logo4 from "../assets/Lenovo.svg";
import logo5 from "../assets/Google.svg";
import logo6 from "../assets/Slack.svg";
const Header = () => {
  return (
    <div className="bg-white px-[10%] pt-[80px]">
      <Navbar />
      <header className="">
        <div className="grid grid-cols-60-1 mb-[80px]">
          <div>
            <h1 className="text-[56px] font-secondary font-bold mb-[8px]">
              Affiliate tracking software shouldn’t cost an arm and a leg.
            </h1>
            <p className="text-secondary">
              Keep track of all your affiliate marketing campaigns in once
              place, and analyze how well they are doing. Best part? It doesn’t
              cost an arm and a leg.
            </p>

            <div className="flex mt-6 mb-9 gap-4">
              <button className="py-[18px] px-6 bg-primary rounded-[5px] text-white font-[600]">
                Get started <span className="font-[400]">— it’s free</span>
              </button>
              <button className="py-[18px] px-6 flex gap-3">
                <img src={play} alt="" />
                How It Works
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex gap-[4px]">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </span>
              <p className="text-secondary">
                5/5 •{" "}
                <span className="text-slate-900 font-bold underline font-bitter">
                  Alternative To Reviews
                </span>
              </p>
            </div>
          </div>
          <img src={image} alt="" className="w-full h-full" />
        </div>

        <div className="mx-auto flex justify-between">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
