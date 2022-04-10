// import react components
import { useState } from 'react';

// import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// import styling
import './Reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logos
import { AiFillHome as homeIcon } from 'react-icons/ai';
import { BsInfoLg as aboutIcon } from 'react-icons/bs';
import { FaHammer as skillsIcon } from 'react-icons/fa';
import { BsCode as projectsIcon } from 'react-icons/bs';
import { IoMailSharp as contactIcon } from 'react-icons/io5';

// import pictures
import logo from './logo.svg';

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
    new Section('contact', contactIcon),
  ])

  return (
    <div className="app">
      <Header sections={sections}/>
      <Home title={title} />
      <About icon={aboutIcon} />
      <Skills icon={skillsIcon} />
      <Projects icon={projectsIcon} />
      <Contact icon={contactIcon} />
      <Footer />
    </div>
  );
}

export default App;
