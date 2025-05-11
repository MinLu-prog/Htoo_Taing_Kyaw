import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/mengi.jpg';
import service4 from '../assets/img/service-4.jpg';
import service5 from '../assets/img/service-5.jpg';
import service6 from '../assets/img/painting.jpeg';

const Services = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">

            <h2>We Provide Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service1} alt="Image" />
                  <div className="service-overlay">
                    <p>"Building construction is the art and science of assembling materials, labor, and technology to create structures that fulfill a variety of purposes."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Building Construction</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service2} alt="Image" />
                  <div className="service-overlay">
                    <p>"Transforming houses into homes with meticulous craftsmanship and innovative design solutions."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>House Renovation</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service3} alt="Image" />
                  <div className="service-overlay">
                    <p>"Crafting visionary spaces that marry form, function, and aesthetics, defining the landscapes of tomorrow."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Architecture Design</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service4} alt="Image" />
                  <div className="service-overlay">
                    <p>"Elevating interiors with curated elegance and thoughtful functionality, tailored to inspire and delight."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Interior Design</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service5} alt="Image" />
                  <div className="service-overlay">
                    <p>"Providing reliable solutions and dedicated support to ensure your spaces thrive with lasting quality and peace of mind."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Fixing & Support</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img src={service6} alt="Image" />
                  <div className="service-overlay">
                    <p>"Bringing vibrance and character to spaces with expertly applied strokes, transforming walls into works of art."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Painting</h3>
                  <Link className="btn" to="/contact">+</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      
      {/* Service Features Start */}
      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
      
                <div className="feature-text">
                  <h3>Expert Workers</h3>
                  <p>Our team consists of highly qualified professionals with years of experience in the construction industry.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
          
                <div className="feature-text">
                  <h3>Quality Work</h3>
                  <p>We are committed to delivering projects that meet the highest standards of quality and craftsmanship.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
           
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                  <p>Our customer support team is available around the clock to address any concerns or inquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Features End */}
    </>
  );
};

export default Services;