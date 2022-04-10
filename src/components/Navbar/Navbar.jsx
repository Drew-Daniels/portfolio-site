import './Navbar.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';

import { Navbar, Nav, Container } from 'react-bootstrap';

// import logos
import { AiFillHome as homeIcon } from 'react-icons/ai';
import { BsInfoLg as aboutIcon } from 'react-icons/bs';
import { FaHammer as skillsIcon } from 'react-icons/fa';
import { BsCode as projectsIcon } from 'react-icons/bs';
import { IoMailSharp as contactIcon } from 'react-icons/io5';

import myLogo from '../../images/icons/double-right-brackets.svg';

class Section {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
  }

function Navy(props) {

    const [sections, setSections] = useState([
        new Section('home', homeIcon),
        new Section('about', aboutIcon),
        new Section('skills', skillsIcon),
        new Section('projects', projectsIcon),
        new Section('contact', contactIcon),
      ])

    return (
        // <nav className='navbar'>
        //     <ul className='navbar-list'>
                // {sections.map((section, i) => {
                //     return (
                //         <li key={i} className='navbar-list-item'>
                //             <a href={"#" + section.name + ""} className='navbar-list-item-link'>
                //                 <IconContext.Provider value={{ size: '2em' }}>
                //                     <section.icon className='section-icon' />
                //                 </IconContext.Provider>
                //                 <span className='section-name'>{section.name}</span>
                //             </a>
                //         </li>
                //     )
        //         })}
        //     </ul>
        // </nav>
        <Navbar fixed='top' bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home' className='d-flex align-items-center'>
                    <img
                        src={myLogo}
                        alt="Drew Daniels' portfolio website logo"
                        width="50"
                        height="50"
                        className='nav-brand-image'
                    />
                    <span className='nav-brand-name'>Drew Daniels</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>Link</Nav.Link>
                        <Nav.Link href='#skills'>Skills</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navy;