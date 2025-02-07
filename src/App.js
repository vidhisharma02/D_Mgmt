import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";
import About from "./About";
import Governance from "./Governance";
import Jobs from "./Jobs"; // Import Jobs Page
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    `${process.env.PUBLIC_URL}/slideshow1.jpg`,
    `${process.env.PUBLIC_URL}/slideshow2.jpg`,
    `${process.env.PUBLIC_URL}/card-1-hack.jpg`,
    `${process.env.PUBLIC_URL}/card-4-hack.jpg`
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>SafeHorizon</h1>
          </div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/governance">Governance</Link>
            <Link to="/jobs">Jobs</Link> {/* Changed to Link */}
            <Link to="/login">Log In</Link> {/* Changed to Link */}
          </div>
          <GoogleTranslate />
        </nav>

        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div>
              {/* Slideshow */}
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

              {/* Cards Section */}
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
            </div>
          } />

          {/* About Us Page */}
          <Route path="/about" element={<About />} />

          {/* Governance Page */}
          <Route path="/governance" element={<Governance />} />

          {/* Jobs Page */}
          <Route path="/jobs" element={<Jobs />} />

        </Routes>

        {/* Footer */}
        <footer className="footer">© 2025 - All rights reserved.</footer>
      </div>
    </Router>
  );
};

export default App;
