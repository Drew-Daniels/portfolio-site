// import react components
import { useState } from 'react';

// import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

// import styling
import './Reset.css';
import './App.css';

// import pictures
import logo from './logo.svg';
import Headshot from './images/pictures/headshot.jpg';

// import logos

import { AiFillHome as homeIcon } from 'react-icons/ai';
import { BsInfoLg as aboutIcon } from 'react-icons/bs';
import { FaHammer as skillsIcon } from 'react-icons/fa';
import { BsCode as projectsIcon } from 'react-icons/bs';

class Section {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}

function App() {

  const [title, setTitle] = useState('full stack developer');
  const [sections, setSections] = useState([
    new Section('home', homeIcon),
    new Section('about', aboutIcon),
    new Section('skills', skillsIcon),
    new Section('projects', projectsIcon),
  ])

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
