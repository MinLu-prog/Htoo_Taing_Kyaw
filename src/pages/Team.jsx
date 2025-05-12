import React from 'react';
import { Link } from 'react-router-dom';

// Import team member images
import teamMember1 from '../assets/img/Design.jpg';
import teamMember2 from '../assets/img/QC.png';
import teamMember3 from '../assets/img/Construction.jpg';
import teamMember4 from '../assets/img/M&E.jpg';
import teamMember5 from '../assets/img/Solar.png';

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
             <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <img src={teamMember5} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Solar Project Team</h2>
                  
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
  <p>
    At <strong>Htoo Taing Kyaw</strong>, our strength lies in a well-structured and collaborative team led by our top-tier leadership — the <strong>Managing Director</strong>, <strong>Director</strong>, and <strong>General Manager</strong> — who provide strategic direction and vision across the company.
  </p>
  <p>
    Our operations are carried out through a unified structure consisting of key departments such as <strong>Administration</strong>, <strong>Operations</strong>, <strong>HR</strong>, <strong>Finance</strong>, <strong>Store</strong>, and <strong>Contracts</strong>. The <strong>Admin Department</strong>, led by an <strong>Admin Manager</strong>, ensures seamless internal coordination. Meanwhile, the <strong>Operations Department</strong> is divided into specialized roles including <strong>Construction</strong>, <strong>Electrical</strong>, and <strong>Plumbing & Sanitary Consultants</strong>, each supported by experienced <strong>Project Engineers</strong> and dedicated <strong>Engineer Teams</strong>.
  </p>
  <p>
    This clearly defined hierarchy allows us to maintain efficiency, clarity, and accountability in every aspect of our operations. From planning to execution, every department works in harmony to deliver high-quality results and uphold the company’s reputation for excellence. At Htoo Taing Kyaw, we are committed to professionalism, innovation, and long-term value in every project we undertake.
  </p>
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