import React from "react";
import SectionHeader from "../components/sectionHeader";

const Footer = props => {
  return (
    <div className="footer-section">
      <SectionHeader id="contact" title="Contact Me" />
      <div className="contact-section">
        <ul className="personal">
          <li>Email: jacob.cadiente@gmail.com</li>
          <li>Phone: 321-662-9165</li>
        </ul>
        <ul className="social">
          <li id="fb">
            <i className="fab fa-facebook-square" />
          </li>
          <li id="ig">
            <i className="fab fa-instagram" />
          </li>
          <li id="li">
            <i className="fab fa-linkedin" />
          </li>
          <li id="gh">
            <i className="fab fa-github-square" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
