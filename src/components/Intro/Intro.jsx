import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy1.png";
import boys from "../../img/boys.png";
import Phone from "../../img/phone.png";
import mail from "../../img/mail.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Leetcode from "../../img/leetcode.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>👋 I 'm</span>
          <span>JEEVANANTHAM M</span>
          <span>
            <div className="dept">  
              COMPUTER SCIENCE AND BUSINESS SYSTEM [ B.tech ]
            </div>   
            <div className="branch">
       
            </div>
            <div className="about">
            Dedicated and forward-thinking Computer Science graduate
            pursuing a B.Tech in Computer Science and Business Systems.
            Eager to leverage my passion for web and software
            development to contribute to an innovative team that values
            continuous learning and growth. Committed to applying my
            analytical mindset and collaborative spirit to create impactful
            solutions for both personal and organizational advancement.
            </div>

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Find me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons"  >
  <a href="https://github.com/Mjeevanantham">
    <img className="git" src={Github} alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/jeevananthamm/">
    <img className="link" src={LinkedIn} alt="LinkedIn" />
  </a>
  <a href="https://leetcode.com/202CB112/">
    <img className="leet" src={Leetcode} alt="Leetcode" />
  </a>
  <a href="https://twitter.com/_Jeevanantham_">
    <img className="twit" src={Twitter} alt="twitter" />
  </a>
  <a href="tel: 8807825309">
    <img className="call" src={Phone} alt="call" />
  </a>
  <Link to="contact" smooth={true} spy={true}>
  <img className="mess" src={mail} alt="mail" />
        </Link>
</div>

      </div>
      {/* right image side */}
      <div class="i-right" >
  <img src={Vector1} alt="" />
  <img src={Vector2} alt="" />
  <img src={boy} alt="" id="boyImage" class="hidden" />

  <img src={boys} alt="" id="boysImage" />


  

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
