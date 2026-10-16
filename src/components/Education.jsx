import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <section id="Education">
        <div ClassName="container">
            <div className="education-grid" style={{ marginTop: '40px' }}>
                <h2>Education &amp; Background</h2>
                <div className="edu-item">
                    <h3>B.Tech in Computer Science & Engineering (CSE)</h3>
                    <p>SR Institute of Management and Technology | Affiliated to Dr. APJ Abdul Kalam Technical University (AKTU) | 2023 - 2027</p>
                </div>

                <div className="skills-box" style={{ marginTop: '20px' }}>
                    <h3>Technical Arsenal</h3>
                    <ul>
                        <li>Languages: C, C++, Java, Python, JavaScript</li>
                        <li>Web: HTML5, CSS3, React.js, Node.js, Tailwind</li>
                        <li>Tools: MS Excel, VS Code, Git, ithub</li>
                    </ul>
                </div>

                <div className="hobbies" style={{ marginTop: '20px' }}>
                    <h3>Beyond Coding</h3>
                    <p>Competitive Programming, Open Source Contributing, Tech Content Creation, Problem Solving & Team Collaboration</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Education;