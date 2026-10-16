import React from 'react';
import "./Certificates.css";


const certificatesData = [
  {
    title: "Python Silver Badge",
    issuer: "HackerRank",
    desc: "Mastery in coding and Core concepts."
  },
  {
    title: "Data Structures",
    issuer: "YouTube (By Kunal Kushwaha)",
    desc: "In-depth knowledge of Arrays, Linked Lists, and Trees."
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    desc: "Certification for building responsive websites using HTML, CSS, and JS."
  },
  {
    title: "Python for Beginners",
    issuer: "YouTube",
    desc: "Basics of Python programming and GUI development."
  }
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certifications</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <article className="project-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p>{cert.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;