import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark footer-main container-fluid text-light text-center">
      <h3 className="pt-5">Traveler's world</h3>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-google-plus-square"></i>
      <i className="fab fa-instagram-square"></i>
      <p className="copyright-text mt-5 pt-5">
        &copy; 2021 Traveler's world – All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
