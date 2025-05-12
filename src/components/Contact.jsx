import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/garv_rajesh_mittal/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>

          <a href="https://www.facebook.com/garvrajeshmittal" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>

          <a href="https://www.linkedin.com/in/garv-mittal-536059241/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>

          <a href="https://x.com/GarvRajeshM_" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>

          <a href="https://github.com/GarvMittal04" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garvmittal2003@gmail.com" target="_blank" className="items">
            <CiMail className="icons" />
          </a>

        </div>
      </div>
    </>
  );
};

export default Contact;