import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>SafeHorizon is dedicated to providing aid and support in disaster-affected areas. Our work spans across healthcare, economic empowerment, education, and disaster relief.</p>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/card-1-hack.jpg`} alt="Proven Track Record" className="card-one-image" />
          <div className="card-details">
            <h3>Proven Track Record</h3>
            <p>We have a reputation for delivering life-saving support...</p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/card-2-hack.jpg`} alt="Strategic Implementations" className="card-one-image" />
          <div className="card-details">
            <h3>Strategic and Diverse Implementations</h3>
            <p>Our projects span across India, ensuring a broad national reach...</p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/card-3-hack.jpg`} alt="Quality and Impact" className="card-one-image" />
          <div className="card-details">
            <h3>Focus on Quality and Micro Local Impact</h3>
            <p>We prioritize the quality of aid with a micro-local focus...</p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
