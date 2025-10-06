

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube , FaWhatsapp, FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Footer.scss'
import logo from "../../assets/logo2.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" ><img src={logo} alt="logo" /></Link>
          <p>bangalorelawcollege</p>
        </div>

        <div className="footer-links">
          <h4>Address</h4>
          <ul>

            <li>#19/74 8th Cross, Shakthi Ganapathi Nagar</li>
            <li>Kamala nagar main road, </li>
            <li>Basaveshwaranagar,</li>
            <li>Near Ashoka Hospital, </li>
            <li>Bengaluru -560079</li>
            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
          </ul>
        </div>

<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/Law_college" >Home</Link></li>
    <li><Link to="/gallery" >Gallery</Link></li>
    <li><Link to="/history" >History</Link></li>
    <li><Link to="/admissions" >Admission</Link></li>
    {/* <li><Link to="/crops" > Crops</Link></li> */}
    <li><Link to="/contact" >Contact Us</Link></li>
  </ul>
</div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1ZKMX97uyg/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/bangalorelawclg?igsh=bmhzZTNxbzJ5emt2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            {/* <a href="https://www.youtube.com/"><FaYoutube /></a> */}
            <a href="https://wa.me/918618235882" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bangalorelawcollege6@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>


            
          </div>
        </div>
      </div>
      

      <div className="footer-bottom">
        © {new Date().getFullYear()}Bengalurulawcollege All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
