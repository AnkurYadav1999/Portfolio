import React from "react";
import devImg from '../../images/software-engineer.png'
import './About.css'

const About = () => {
  return (
    <div className="about-section" id="about">
    <h2>About Me</h2>
      <div className="about-info">
        <div className="about-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>

        <div className="about-image">
            <img src={devImg} alt="dev-png"/>
        </div>
      </div>
    </div>
  );
};

export default About;
