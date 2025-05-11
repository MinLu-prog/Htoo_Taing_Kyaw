
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import portfolio images
import project1 from '../assets/img/proj1/main.png';
import project2 from '../assets/img/proj2/main2.png';
import project3 from '../assets/img/proj3/main.jpg';
import project4 from '../assets/img/proj4/main.jpg';
import project5 from '../assets/img/proj5/main.jpg';
import project6 from '../assets/img/proj6/main.jpg';

// Import jQuery and isotope
import $ from 'jquery';
import Isotope from 'isotope-layout';

const Portfolio = () => {
  useEffect(() => {
    // Initialize Isotope
    $(window).on('load', function () {
      var $container = $('.portfolio-container');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

      $('.portfolio-filter li').on('click', function() {
        $('.portfolio-filter li').removeClass('filter-active');
        $(this).addClass('filter-active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    });
  }, []);

  return (
    <>
      {/* Page Header Start */}
  {/* Page Header Start */}
<div className="page-header">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>Your Vision. Our Expertise.</h2>
      </div>
      <div className="col-12">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Projects</Link>
      </div>
    </div>
  </div>
</div>
{/* Page Header End */}

      {/* Page Header End */}

      {/* Portfolio Start */}
      <div className="portfolio">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Projects</p>
            <h2>Visit Our Projects</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-filter" className="portfolio-filter">
                <li data-filter="*" className="filter-active">All</li>
              
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item complete wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project1} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Internal MEP Installation of VIP building, Mingalardon </h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item running wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project2} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>No.182,Khayaeyeikthar, Zakabar Housing , Mingalardon</h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming wow fadeInUp" data-wow-delay="0.3s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project3} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>No.148,Khayaeyeikthar, Zakabar Housing, Mingalardon</h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item complete wow fadeInUp" data-wow-delay="0.4s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project4} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>No.26,F-10,Natevan Street,Thar Du Quarter,Kyeemyintdaing</h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item running wow fadeInUp" data-wow-delay="0.5s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project5} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>No.178, Rakhine Kyaung street, Palae Quarter, Mingalardon</h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming wow fadeInUp" data-wow-delay="0.6s">
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={project6} alt="Project Image" />
                </div>
                <div className="portfolio-text">
                  <h3>Kanthar Damayeikthar Monastery, Thanlyin</h3>
                  <Link className="btn" to="/portfolio" data-lightbox="portfolio">+</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}
      
      {/* Portfolio Features Start */}
      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
        
                <div className="feature-text">
                  <h3>Quality Materials</h3>
                  <p>We use only the finest materials available in all our projects, ensuring durability and satisfaction.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
           
                <div className="feature-text">
                  <h3>On-Time Delivery</h3>
                  <p>We pride ourselves on completing projects within the agreed timeframe, respecting our clients' schedules.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
        
                <div className="feature-text">
                  <h3>Continued Support</h3>
                  <p>Our relationship with clients doesn't end with project completion; we provide ongoing support and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Features End */}
    </>
  );
};

export default Portfolio;
