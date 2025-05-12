
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import FontAwesome - add this import statement
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import images
import slide1 from '../assets/img/home-slide-1.jpg';
import slide2 from '../assets/img/home-slide-2.jpg';
import slide3 from '../assets/img/home-slide-3.jpg';
import aboutImg from '../assets/img/proj4/main.jpg';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/mengi.jpg';
import teamMember1 from '../assets/img/Design.jpg';
import teamMember2 from '../assets/img/QC.png';
import teamMember3 from '../assets/img/Construction.jpg';
import teamMember4 from '../assets/img/M&E.jpg';
import teamMember5 from '../assets/img/Solar.png';
const Home = () => {
  // Create a ref to store animation elements
  const animatedElementsRef = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Total number of slides
  const totalSlides = 3;
  
  // Carousel auto-play settings
  const autoPlayDelay = 5000; // 5 seconds
  const animationDuration = 600; // 0.6 seconds for animation
  const autoPlayTimerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Data for carousel slides
  const carouselData = [
    {
      image: slide1,
      subtitle: "Locally Grown",
      title: "Globally Trusted."
    },
    {
      image: slide2,
      subtitle: "Building Excellence,",
      title: "Empowering Futures."
    },
    {
      image: slide3,
      subtitle: "We",
      title: "For Your Dream Home"
    }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    setActiveSlide((prev) => (prev + 1) % totalSlides);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, animationDuration);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, animationDuration);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    if (isAnimatingRef.current || index === activeSlide) return;
    isAnimatingRef.current = true;
    
    setActiveSlide(index);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, animationDuration);
  };

  // Set up autoplay
  useEffect(() => {
    // Start auto rotation
    autoPlayTimerRef.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        nextSlide();
      }
    }, autoPlayDelay);
    
    // Clean up
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, []);

  // Scroll animations for other page elements
  useEffect(() => {
    // Add animation classes to elements after component mounts
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      // Store elements in ref for later cleanup
      animatedElementsRef.current = elements;
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When element is within viewport (with offset)
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        } else {
          // Optional: Remove animation when element scrolls out of view
          // element.classList.remove('animated');
        }
      });
    };

    // Initialize animations for elements already in viewport
    animateElements();
    
    // Add scroll event listener with throttling to improve performance
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          animateElements();
          isScrolling = false;
        });
        isScrolling = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Normal Carousel Start */}
      <div className="carousel-container" style={{
        position: 'relative',
        height: '60vh', // Reduced height
        overflow: 'hidden',
        margin: '0 auto',
        maxWidth: '1200px' // Limit max width
      }}>
        {/* Carousel Slides */}
        <div className="carousel-track" style={{
          display: 'flex',
          height: '100%',
          transition: `transform ${animationDuration}ms ease`,
          transform: `translateX(-${activeSlide * 100}%)`
        }}>
          {carouselData.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === activeSlide ? 'active' : ''}`}
              style={{
                minWidth: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Image container with proper sizing */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index + 1}`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // This will maintain aspect ratio while covering the container
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                {/* Caption with text */}
                <div className="carousel-caption" style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '20px',
                  borderRadius: '5px',
                  maxWidth: '80%',
                  margin: '0 auto'
                }}>
                  <p className={`slide-subtitle ${index === activeSlide ? 'animate-text' : ''}`} style={{ 
                    fontSize: '24px', 
                    marginBottom: '10px',
                    animation: index === activeSlide ? 'fadeInRight 0.8s ease-out forwards' : 'none'
                  }}>{slide.subtitle}</p>
                  
                  <h1 className={`slide-title ${index === activeSlide ? 'animate-text' : ''}`} style={{ 
                    fontSize: '42px', 
                    fontWeight: 'bold',
                    animation: index === activeSlide ? 'fadeInLeft 0.8s ease-out forwards' : 'none'
                  }}>{slide.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button 
          className="carousel-control-prev" 
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">&lt;</span>
          <span className="sr-only">Previous</span>
        </button>
        
        <button 
          className="carousel-control-next" 
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true">&gt;</span>
          <span className="sr-only">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators" style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}>
          {carouselData.map((_, index) => (
            <button 
              key={index}
              className={`carousel-indicator ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === activeSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translate3d(-30px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translate3d(30px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>
      {/* Normal Carousel End */}
      
      {/* Mission Start */}
      <div className="feature animate-on-scroll" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll slide-in-left fade-delay-100">
                <div className="feature-text">
                  <h3>Mission</h3>
                  <p>"We are committed to provide 100% effective quality services with reasonable and competitive prices. We will deliver superior services and products with high standard in technical professionalism during operation periods to our clients and create an excellent work-place for our employees."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll fade-delay-200">
                <div className="feature-text">
                  <h3>Vision</h3>
                  <p>"Enhancing our Professional Skill, Mutual Commitments Loyalty and Integrity, Respect and Long Term Relationship."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll slide-in-right fade-delay-300">
                <div className="feature-text">
                  <h3>Company Objective</h3>
                  <p>"We aim to grow our expertise and lead in delivering top-tier Construction, Mechanical, Electrical, and Instrumentation solutions for major projects—from hotels and hospitals to malls, airports, jetties, and factories."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission End */}

      {/* About Start */}
      <div className="about animate-on-scroll">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img animate-on-scroll slide-in-left fade-delay-100">
                <img src={aboutImg} alt="Image" className="hover-shadow" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left animate-on-scroll slide-in-right fade-delay-200">
                <p>Welcome to Htoo Taing Kyaw Construction Limited</p>
                <h2>13 Years Experience</h2>
              </div>
              <div className="about-text animate-on-scroll slide-in-right fade-delay-300">   
                 <h2>About Us</h2>
                  <p><strong>HTOO TAING KYAW ENGINEERING AND CONSTRUCTION</strong> is a leading construction company with a strong track record of delivering high-quality projects across various sectors. With over 15 years of industry experience, we have earned a reputation as a trusted partner for clients seeking reliability, excellence, and innovation in construction.</p>
                  <p>At <strong>HTOO TAING KYAW ENGINEERING AND CONSTRUCTION</strong>, we are dedicated to exceeding expectations and setting new benchmarks in craftsmanship. Our team of skilled professionals brings technical expertise, innovative solutions, and a passion for excellence to every project we undertake.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="feature animate-on-scroll">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll slide-in-left fade-delay-100">
                <div className="feature-icon">
                  {/* Replace flaticon-worker with FontAwesome icon */}
                  <i className="fas fa-hard-hat fa-3x" style={{ color: '#F6AB2E' }}></i>
                </div>
                <div className="feature-text">
                  <h3>Expert Workers</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll fade-delay-200">
                <div className="feature-icon">
                  {/* Replace flaticon-building with FontAwesome icon */}
                  <i className="fas fa-building fa-3x" style={{ color: '#F6AB2E' }}></i>
                </div>
                <div className="feature-text">
                  <h3>Quality Work</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item animate-on-scroll slide-in-right fade-delay-300">
                <div className="feature-icon">
                  {/* Replace flaticon-call with FontAwesome icon */}
                  <i className="fas fa-phone-alt fa-3x" style={{ color: '#F6AB2E' }}></i>
                </div>
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Service Start */}
      <div className="service animate-on-scroll">
        <div className="container">
          <div className="section-header text-center animate-on-scroll fade-delay-100">
       
            <h2>We Provide Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item animate-on-scroll hover-shadow fade-delay-100">
                <div className="service-img">
                  <img src={service1} alt="Image" />
                  <div className="service-overlay">
                    <p>"Engineering excellence that bridges innovation and infrastructure, laying the foundation for tomorrow's iconic landscapes."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Engineering & Construction Services</h3>
                  <Link className="btn" to="/services">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item animate-on-scroll hover-shadow fade-delay-200">
                <div className="service-img">
                  <img src={service2} alt="Image" />
                  <div className="service-overlay">
                    <p>"Orchestrating projects with precision and foresight, where every beam and wire weaves a legacy of reliability and brilliance."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Project Management & Consulting</h3>
                  <Link className="btn" to="/services">+</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item animate-on-scroll hover-shadow fade-delay-300">
                <div className="service-img">
                  <img src={service3} alt="Image" />
                  <div className="service-overlay">
                    <p>"Crafting visionary spaces that marry form, function, and aesthetics, defining the landscapes of tomorrow."</p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Innovative & Energy-Saving Solutions</h3>
                  <Link className="btn" to="/services">+</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Team Start */}
      <div className="team animate-on-scroll">
        <div className="container">
          <div className="section-header text-center animate-on-scroll fade-delay-100">

            <h2>Meet Our Team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item animate-on-scroll hover-shadow fade-delay-100">
                <div className="team-img">
                  <img src={teamMember1} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Design Team</h2>
                </div>
                <div className="team-social">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item animate-on-scroll hover-shadow fade-delay-200">
                <div className="team-img">
                  <img src={teamMember2} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>QC Team</h2>
                </div>
                <div className="team-social">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item animate-on-scroll hover-shadow fade-delay-300">
                <div className="team-img">
                  <img src={teamMember3} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Operation Team</h2>
                </div>
                <div className="team-social">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item animate-on-scroll hover-shadow fade-delay-400">
                <div className="team-img">
                  <img src={teamMember4} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>M&E Team</h2>
                </div>
                <div className="team-social">
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
    </>
  );
};

export default Home;
