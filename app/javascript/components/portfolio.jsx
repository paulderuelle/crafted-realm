import React, { useState } from 'react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    'GemSentinel',
    'RollFinder',
    'PostsChallenge',
  ];

const images = [
  <img src="/assets/GemSentinel.png" className='carousel-img'/>,
  <img src="/assets/RollFinder.png" className='carousel-img'/>,
  <img src="/assets/PostsChallenge.png" className='carousel-img'/>
];


  const descriptions = [
    <div className="content-description">
      <h2>GEM SENTINEL</h2>
      <h3>Developed in <span className="highlight">just 48h</span> for Rails Hackathon.</h3>
      <h4>The theme was <span className="highlight">"Support the Rails community".</span> The application performs <span className="highlight">regular updates via cron jobs</span> to check user’s gem version.
      <br />After simply copying and pasting a `bundle list`, the application enables passive monitoring and access to <span className="highlight">version notes without any hassle.</span>
      <br /><br />The dashboard is entirely <span className="highlight">managed by React</span> for an optimal UI/UX.
      <br />Babel and Webpack are used to <span className="highlight">handle JSX file</span> translation<span className="square"></span></h4>
    </div>,
    <div className="content-description">
      <h2>ROLL FINDER</h2>
      <h3>End of <span className="highlight">bootcamp project</span> at “Le Wagon”.</h3>
      <h4>Our main objective was to gain valuable experience in teamwork while considering <span className="highlight">all aspects of application development.</span>
      <br />We began by <span className="highlight">identifying the pain,</span> defining the target and crafting a core user journey, then we discussed about the architecture and <span className="highlight">technologies used</span> and we dived into <span className="highlight">prototyping,</span> design and deployment.
      <br /><br />The result is a <span className="highlight">mobile-designed meeting platform</span> which aims to <span className="highlight">forge new connections</span> among rolists by helping them to find and chat with nearby players to elevate their gaming experiences.<span className="square"></span></h4>
    </div>,
    <div className="content-description">
      <h2>POSTS CHALLENGE</h2>
      <h3>Website of <span className="highlight">my final</span> “Le Wagon” certification.</h3>
      <h4>This project was carried out with detailed <span className="highlight">instructions on the functionalities</span> to implement and the technologies to use.
      <br />I also <span className="highlight">received a brief</span> specifying that I had a limited time of <span className="highlight">8 hours to code</span> the application.
      <br /><br />The application allows users to <span className="highlight">search for and consult</span> news publications. Users can <span className="highlight">comment and share</span> the articles they wish.<span className="square"></span></h4>
    </div>
  ];

  const handleShowProject = (project) => {
    setActiveProject(project);
    setActiveSlide(project);
  };

  const totalSlides = slides.length;
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };
  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
    <div className='top-projects-container'>
      <div className='projects-index'>
          {slides.map((slide, index) => (
          <h3 key={index}
            className={`projects-index ${activeProject === index ? 'active' : ''}`}
            onClick={() => {handleShowProject(index);}}>
            <div id='slide-title'>{activeProject === index && <span>/&gt;</span>}{slide}</div>
          </h3>))}
      </div>
        <div className="slide-description">
          {descriptions[activeSlide]}
        </div>
    </div>
    <div className="carousel-container">
      <span className='borders top'></span>
      <span className='borders right'></span>
      <span className='borders bottom'></span>
      <span className='borders left'></span>
        <div className="carousel-track">
          {slides.map((slide, index) => (
          <div className={`carousel-slide ${index === activeSlide ? 'active' : ''}`} key={index}>
            {images[index]}</div>))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
