import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h2>Rubiks</h2>
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/quick-links">Quick Links</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section map">
          <h2>Get In Touch</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.688313843202!2d77.40489377477594!3d23.218026909007005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42ef566fe395%3A0xcd068348cdaaf336!2sFaculty%20Guest%20House!5e0!3m2!1sen!2sin!4v1722251535515!5m2!1sen!2sin"
            width="850"
            height="50"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2021 Rubiks. DESIGNED BY @RUBIK'S Designer Team<span>Cookie Settings | Terms and Conditions | Privacy Policy</span></p>
      </div>
    </footer>
  );
};

export default Footer;
