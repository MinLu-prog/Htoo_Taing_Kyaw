import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact slide-in-left fade-delay-100">
              <h2>Office Contact</h2>
              <p><i className="fa fa-map-marker-alt"></i>Zakabar Housing, Yangon</p>
              <p><i className="fa fa-phone-alt"></i>+95 95041936</p>
              <p><i className="fa fa-envelope"></i>htkengineers@gmail.com</p>
              <div className="footer-social">
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link fade-delay-200">
              <h2>Services Areas</h2>
              <Link to="/" className="hover-shadow">Integrated Engineering Design</Link>
              <Link to="/" className="hover-shadow">M&E Systems Mastery</Link>
              <Link to="/" className="hover-shadow">Sustainable Construction Solutions</Link>
              <Link to="/" className="hover-shadow">End-to-End Project Leadership</Link>
              <Link to="/" className="hover-shadow">Technical Consulting & Innovation</Link>
              <Link to="/" className="hover-shadow">Quality Assurance & Compliance</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link fade-delay-300">
              <h2>Useful Pages</h2>
              <Link to="/about" className="hover-shadow">About Us</Link>
              <Link to="/contact" className="hover-shadow">Contact Us</Link>
              <Link to="/team" className="hover-shadow">Our Team</Link>
              <Link to="/portfolio" className="hover-shadow">Projects</Link>
            </div>
          </div>
    
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; <Link to="#" className="hover-shadow">Htoo Taing Kyaw Construction</Link>, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;