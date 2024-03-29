import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">JEEVANANTHAM   <Toggle /> M
        
</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
              Fascinate
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Skill's
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Project's
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Achievement's
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
