import React from "react";
import "./css/TextStyles.css";
import EwokNavbar from "./EwokNavbar.js";

import background from "./images/pattern.png";
import Header from "./Header";

import adPic from "./images/Ad_01.PNG";
import adPic2 from "./images/Ad_02.png";

import Ad from "./components/Ads.js";
import Copyright from "./components/Copyright";

//import './components/TextStyles.'

function AboutUs() {
  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "auto 25%",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />

      <EwokNavbar />
      <div className="content" style={{ display: "inline-block" }}>
        <center className="header1"> About Us </center>
        <br></br>
        <text className="body">
          We are Moms Against Ewoks (MAE), and our mission is to protect the
          world’s children from the satanic man-eating creatures marketed to
          them. We hope that by raising awareness and informing the public about
          this issue we can enact change in retailers nationwide, and end the
          efforts to indoctrinate our children through the selling of Ewok toys.
          <br></br>
        </text>
        <div className="line"></div>
      </div>
      <Ad img={adPic} width="220" height="440" />
      <Ad img={adPic2} width="823" height="445" />
      <Copyright />
    </div>
  );
}
export default AboutUs;
