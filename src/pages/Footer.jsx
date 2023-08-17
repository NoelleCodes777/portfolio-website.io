import React from "react";
import { BiLogoVuejs } from "react-icons/bi";
import BottomNav from "./components/BottomNav";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_section">
        <BottomNav />
        <div className="line"></div>
        <h2>Made with ❤️ by Noelle</h2>
      </div>
    </div>
  );
}

export default Footer;
