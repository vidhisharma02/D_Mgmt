import React, { useState } from "react";
import GoogleTranslate from "./GoogleTranslate"; // Import the Translator Component


const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    `${process.env.PUBLIC_URL}/slideshow1.jpg`,
    `${process.env.PUBLIC_URL}/slideshow2.jpg`,
    `${process.env.PUBLIC_URL}/card-1-hack.jpg`,
    `${process.env.PUBLIC_URL}/card-4-hack.jpg`
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Moves forward correctly
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Moves backward correctly
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Safe Horizon Logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <a href="#about">About Us</a>
          <a href="#governance">Governance</a>
          <a href="#jobs">Jobs</a>
          <a href="#login">Log In</a>
        </div>
        <GoogleTranslate />
      </nav>
 {/*slideshow */}
 <div id="slideshow">
  <div className="slide-wrapper" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
    {slides.map((slide, index) => (
      <div key={index} className="slide">
        <img src={slide} alt={`Slide ${index + 1}`} />
        <p className="hero-para">RESPONDING TO CONFLICTS AND CRISIS</p>
      </div>
    ))}
  </div>
  <div className="navigation-buttons">
    <button onClick={prevSlide}>❮</button>
    <button onClick={nextSlide}>❯</button>
  </div>
</div>


      <p className="para-class">
        From Haiti to Syria, watch how we help to respond, recover, and rebuild communities when crisis and emergencies happen.
      </p>

      {/* Cards */}
      <div className="card-grid">
        {[1, 2, 3, 4].map((num) => (
          <div className="card" key={num}>
            <img
              src={`${process.env.PUBLIC_URL}/card-${num}-hack.jpg`}
              alt={`Card ${num}`}
              className="card-one-image"
            />
            <div className="card-details">
              <h3 className="card-name">Revolutionizing Healthcare Resilience</h3>
              <p className="card-desc">
                Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
              </p>
              <a href="#" className="card-one-button">Learn More</a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 - All rights reserved.</footer>
    </div>
  );
};

export default App;
