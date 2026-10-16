import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Yash Chaudhary</strong>, a passionate B.Tech Computer Science student with a strong foundation in Problem Solving and Full-Stack Development.
            </p>
            <p>
              My journey in coding started with curiosity, which led me to master <strong>Java and Data Structures (DSA)</strong>. I enjoy building web applications that solve real-world problems and have a clean, user-friendly design.
            </p>
            <div className="skills-mini">
              <span><i className="fa-solid fa-code"></i> Problem Solver</span>
              <span><i className="fa-solid fa-layer-group"></i> Full Stack Dev</span>
              <span><i className="fa-solid fa-bolt"></i> Quick Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;