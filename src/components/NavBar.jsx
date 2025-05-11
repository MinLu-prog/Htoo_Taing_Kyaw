import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [fadeState, setFadeState] = useState({
    active: false,
    path: location.pathname
  });
  
  // Manage the fade effect when location changes
  useEffect(() => {
    setFadeState({
      active: true,
      path: location.pathname
    });
    
    // Reset fade state after animation completes
    const timer = setTimeout(() => {
      setFadeState(prev => ({
        ...prev,
        active: false
      }));
    }, 500); // Match this with the CSS transition duration
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Handle manual link click for triggering fade animation
  const handleLinkClick = (path) => {
    if (path === location.pathname) return;
    
    setFadeState({
      active: true,
      path: path
    });
  };
  
  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">MENU</Link>
          <button 
            type="button" 
            className="navbar-toggler" 
            data-toggle="collapse" 
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              <Link 
                to="/" 
                className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''} ${fadeState.active && fadeState.path === '/' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''} ${fadeState.active && fadeState.path === '/about' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/about')}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`nav-item nav-link ${location.pathname === '/services' ? 'active' : ''} ${fadeState.active && fadeState.path === '/services' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/services')}
              >
                Service
              </Link>
              <Link 
                to="/team" 
                className={`nav-item nav-link ${location.pathname === '/team' ? 'active' : ''} ${fadeState.active && fadeState.path === '/team' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/team')}
              >
                Team
              </Link>
              <Link 
                to="/portfolio" 
                className={`nav-item nav-link ${location.pathname === '/portfolio' ? 'active' : ''} ${fadeState.active && fadeState.path === '/portfolio' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/portfolio')}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''} ${fadeState.active && fadeState.path === '/contact' ? 'fade-transition' : ''}`}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;