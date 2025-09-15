import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer1.scss";
import logo from "../../assets/logo2.png"; // replace with your logo path

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-col">
          <img src={logo} alt="College Logo" className="footer-logo" />
          <p>
            Bangalore Law College – shaping future legal professionals with
            excellence in education and values.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/admission">Admissions</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 22/255A Hidayath Nagar, Kalamassery, Ernakulam</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ info@bangalorelawcollege.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bangalore Law College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer1;
