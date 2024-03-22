import React from "react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-[80px]">
      <img src={logo} alt="" />

      <ul className="flex gap-6 text-secondary">
        <li>Pricing</li>
        <li>Features</li>
        <li>Docs</li>
      </ul>

      <button className="py-[18px] px-6 bg-primary rounded-[5px] text-white font-[600]">
        Get started <span className="font-[400]">— it’s free</span>
      </button>
    </nav>
  );
};

export default Navbar;
