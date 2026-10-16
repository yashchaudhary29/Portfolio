import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSideBar from './components/SocialSideBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSideBar/>
      <main>
        <Home />
        <About />
        <Education />
        <Stats />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;