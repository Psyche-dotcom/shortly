import React from "react";

const Footer = () => {
  return (
    <section className="footer_details Container">
      <img src="./images/logoW.svg" alt="logo" className="logo-footer" />
      <div className="footer_flex">
        <ul>
          <li className="first_li">Features</li>
          <li> Link Shortening </li>

          <li>Branded Links </li>

          <li>Analytics</li>
        </ul>
        <ul>
          <li className="first_li">Resources </li>
          <li> Blog </li>
          <li> Developers </li>
          <li>Support</li>
        </ul>
        <ul>
          <li className="first_li">Features</li>
          <li> Company </li>
          <li>About </li>
          <li>Our Team </li>
          <li>Careers </li>
          <li>Contact </li>
        </ul>
        <div className="social">
          <img src="./images/icon-facebook.svg" alt="facebook" />
          <img src="./images/icon-twitter.svg" alt="twitter" />
          <img src="./images/icon-pinterest.svg" alt="pinterest" />
          <img src="./images/icon-instagram.svg" alt="instagram" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
