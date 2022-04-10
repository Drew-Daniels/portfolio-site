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

// import pictures
import logo from './logo.svg';

function App() {

  const [title, setTitle] = useState('full stack developer');


  return (
    <div className="app">
      <Header/>
      <Home title={title} />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
