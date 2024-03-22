import React from "react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav classNsme="fle">
      <img src={logo} alt="" />

      <ul>
        <li>Pricing</li>
        <li>Features</li>
        <li>Docs</li>
      </ul>

      <button className="py-[18px] px-6">
        Get started <span>— it’s free</span>
      </button>
    </nav>
  );
};

export default Navbar;
