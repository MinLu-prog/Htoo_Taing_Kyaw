import React from 'react';
import { Link } from 'react-router-dom';

// Import team member images
import teamMember1 from '../assets/img/Design.jpg';
import teamMember2 from '../assets/img/QC.png';
import teamMember3 from '../assets/img/Construction.jpg';
import teamMember4 from '../assets/img/M&E.jpg';

const Team = () => {
  return (
    <>
{/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>The Team Behind Our Success</h2>
          </div>
          <div className="col-12">
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */}


      {/* Team Start */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">

            <h2>Meet Our Engineers & Workers</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-img">
                  <img src={teamMember1} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Design Team</h2>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-img">
                  <img src={teamMember2} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>QC Team</h2>
        
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="team-img">
                  <img src={teamMember3} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Operation Team</h2>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <img src={teamMember4} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>M&E Team</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Team Description Start */}
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <p>Why Choose Our Team</p>
                <h2>Experience & Expertise</h2>
              </div>
              <div className="about-text">
                <p>Our team at Flomatexs Construction Limited brings together professionals with diverse expertise and backgrounds in the construction industry. Led by our CEO, Contractor Omondi, our team is committed to excellence in every project we undertake.</p>
                <p>With a focus on innovation, quality, and customer satisfaction, our engineers and workers strive to exceed expectations and deliver results that stand the test of time. Each member of our team undergoes rigorous training and stays updated with the latest industry trends and technologies.</p>
                <p>We believe that our strength lies in our people, and we take pride in the skills, dedication, and integrity that each team member brings to Flomatexs Construction Limited.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Description End */}
    </>
  );
};

export default Team;