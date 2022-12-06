import "./Footer.scss";
import React from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="footer">
        <p className="footer__label">
          &copy; The BJJ LogApp Inc. All Rights Reserved.
        </p>
        <div className="footer__icons">
          <FaInstagramSquare />
          <FaFacebookSquare />
          <FaTwitterSquare/>
        </div>
      </footer>
    );
}

export default Footer;
