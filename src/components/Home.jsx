import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./Home.css";

const Home = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(imgRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text" ref={textRef}>
          <h1>
            Hi, I'm <span className="highlight">Yash Chaudhary</span>
          </h1>
          <p>B.Tech CSE Student @ AKTU | Aspiring Software Engineer</p>
          <p>Specializing in DSA with Java &amp; Full-Stack Development</p>
          <a href="/yash_resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn">Resume</button>
          </a>
        </div>

        <div className="home-img" ref={imgRef}>
          <div className="img-box">
            <img src="/yash.jpg" alt="Yash Chaudhary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;