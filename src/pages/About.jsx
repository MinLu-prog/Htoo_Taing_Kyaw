import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import aboutImg from '../assets/img/proj3/main.jpg';

// Import Organization Chart Component
import OrganizationChart from '../components/OrganizationChart';

const About = () => {
  return (
    <>
      {/* About Start */}
      <div className="about wow fadeInUp transition-element" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img image-scale-transition">
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left fade-in-element">
                <b>Welcome to Htoo Taing Kyaw Construction Limited</b>
                <h2>13 Years Experience</h2>
              </div>
              <div className="about-text fade-in-element">   
    <p>HTOO TAING KYAW is a premier engineering and construction firm with a rich history of delivering high-quality projects across diverse sectors. Established in 2012, we have built a reputation as a trusted partner for clients seeking excellence in integrated engineering solutions.</p>
    
      <p>At HTOO TAING KYAW, we are committed to exceeding expectations and setting new standards in Civil, Structural, and M&E engineering. Our team of skilled professionals brings technical expertise, innovative approaches, and a passion for precision to every project we undertake.</p>
    
      <p>From industrial facilities and commercial complexes to infrastructure projects and energy-efficient buildings, we have successfully completed a wide range of projects, earning recognition for our reliability, technical integrity, and superior quality.</p>

      <p>Our dedication to client satisfaction is demonstrated through our transparent communication, meticulous attention to detail, and unwavering commitment to delivering projects on time and within budget. We pride ourselves on understanding our clients' unique requirements and delivering tailored solutions that meet their specific needs.</p>
    
           <p>Choose HTOO TAING KYAW for your next project and experience the difference that specialized engineering expertise, professional execution, and dedicated service can make in bringing your vision to life.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Mission Vision Start */}
      <div className="feature wow fadeInUp transition-element" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item hover-scale-element">
       
                <div className="feature-text">
                  <h3 className="title-transition">Mission</h3>
                  <p>"To deliver exceptional construction services with integrity, professionalism, and innovation, exceeding client expectations and contributing to the sustainable development of communities."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item hover-scale-element">
          
                <div className="feature-text">
                  <h3 className="title-transition">Vision</h3>
                  <p>"To be recognized as a leader in the construction industry, setting new standards of excellence through our commitment to quality, safety, and environmental sustainability."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item hover-scale-element">
            
                <div className="feature-text">
                  <h3 className="title-transition">Goal</h3>
                  <p>Customer Satisfaction: Ensure client satisfaction by delivering projects on time, within budget, and to the highest quality standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission Vision End */}

      {/* Our Values Start */}
      <div className="about wow fadeInUp transition-element" data-wow-delay="0.1s" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center fade-in-element">
                <p>Our Core Values</p>
                <h2>What Sets Us Apart</h2>
              </div>
              <div className="about-text">
                <div className="row">
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Quality</h4>
                      <p>We are committed to excellence in everything we do, from the materials we use to the finished product we deliver.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Integrity</h4>
                      <p>We conduct our business with honesty, transparency, and ethical practices that build trust with our clients and partners.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Safety</h4>
                      <p>The safety of our workers, clients, and the general public is our priority on every project we undertake.</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Innovation</h4>
                      <p>We embrace new technologies and methodologies to improve efficiency, sustainability, and results.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Teamwork</h4>
                      <p>We believe in the power of collaboration and work together to achieve common goals and overcome challenges.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-item hover-lift-element">
                      <h4><i className="fas fa-check-circle icon-pulse"></i> Client Focus</h4>
                      <p>Understanding and exceeding our clients' expectations is at the heart of our business philosophy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Values End */}

      {/* Organization Chart Start */}
      <div className="about wow fadeInUp transition-element" data-wow-delay="0.1s" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center fade-in-element">
                <p>Our Structure</p>
                <h2>Organization Chart</h2>
              </div>
              <div className="org-chart-wrapper fade-in-element">
                <OrganizationChart />
              </div>
              <div className="text-center mt-4">
                <p className="org-chart-description">
                  Our organizational structure is designed to ensure efficient project execution, clear communication channels, 
                  and specialized expertise in every aspect of our operations. This hierarchical framework enables us to maintain 
                  high standards of quality while providing responsive service to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Organization Chart End */}
    </>
  );
};

export default About;