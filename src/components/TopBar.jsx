
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Htoo_Taing_Kyaw.png';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', margin: '0px', transform: 'scale(1.4)' }} />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
            <div className="row">
              <div className="col-4">
             
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    {/* Replace flaticon-call with FontAwesome icon */}
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Call Us</h3>
                    <p><a href="tel:+95 965045594">+95 965045594</a></p>
                    <p><a href="tel:+95 95041936">+95 95041936</a></p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    {/* Replace flaticon-send-mail with FontAwesome icon */}
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Email Us</h3>
                    <a href="mailto:htkengineers@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope"></i> Click Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;