// import react components
import { useState } from 'react';

// import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

import './Reset.css';
import './App.css';
// import pictures
import logo from './logo.svg';

import Headshot from './images/pictures/headshot.jpg';

function App() {

  const [title, setTitle] = useState('Full Stack Developer');
  const [sections, setSections] = useState(['home', 'about', 'skills', 'projects'])

  return (
    <div className="App">
      <Header sections={sections} />
      <Home title={title} headshot={Headshot} />
      <About />
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
