import React, { useState } from 'react';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';

function Homepage() {
  const [activeSection, setActiveSection] = useState(null);

  const handleShowSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/assets/logo.png"/>
          <p>Crafted Realm</p>
        </div>
        <div className="nav-buttons">
          <div className="left-nav">
            <p onClick={() => handleShowSection('about')}>ABOUT</p>
            <p onClick={() => handleShowSection('portfolio')}>PORTFOLIO</p>
          </div>
          <p onClick={() => handleShowSection('contact')}>CONTACT</p>
        </div>
      </div>

        <main>
          {activeSection === 'about' && <About />}
          {activeSection === 'portfolio' && <Portfolio />}
          {activeSection === 'contact' && <Contact />}
        </main>

      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255, 0.33)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255, 0.33)" />
          <use xlinkHref="#gentle-wave" x="48" y="6" fill="rgba(255, 255, 255, 0.33)" />
          <use xlinkHref="#gentle-wave" x="48" y="1" fill="rgba(255, 255, 255, 0.33)" />
        </g>
      </svg>
      <div className="footer">
        <div className="content">
          <p>_CONNECT\WITH/ME_</p>
          <p>
            <a href="https://github.com/paulderuelle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/paulderuelle/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/scribolux/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/paul.deruelle.reims/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
