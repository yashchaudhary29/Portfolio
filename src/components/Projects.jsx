import React from 'react';

const projectsData = [
  {
    title: 'My_Portfolio',
    tech: 'HTML, Tailwind CSS, JS, ReactJS',
    description: 'A modern, responsive portfolio crafted using HTML, CSS, JS, and React.',
    link: 'https://github.com/yashchaudhary29/My_Portfolio',
  },
  {
    title: 'Tic-Tac-Toe using JS',
    tech: 'JavaScript, HTML, CSS',
    description: 'An interactive Tic-Tac-Toe game with winning logic implementation.',
    link: 'https://github.com/yashchaudhary29/Tic-Tac-Toe-using-JavaScript',
  },
  {
    title: 'Calculator',
    tech: 'Python, Tkinter',
    description: 'A beginner-friendly GUI calculator application built using Python.',
    link: 'https://github.com/yashchaudhary29/Calculator',
  },
  {
    title: 'E-Cart',
    tech: 'HTML5, Tailwind CSS, JS, ReactJS',
    description: 'Built responsive UI with Tailwind CSS and Rest API integration',
    link: 'https://github.com/yashchaudhary29/E-Cart',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Innovative Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="tech-stack">Tech Stack: {project.tech}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;