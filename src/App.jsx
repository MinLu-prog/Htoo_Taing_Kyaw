import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/animation.css';
// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Import components
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import CSS
import './assets/css/style.css';
import './assets/css/org-chart.css'; // Import organization chart styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Bootstrap JS (without jQuery)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import mermaid
import 'mermaid/dist/mermaid.min.js';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;