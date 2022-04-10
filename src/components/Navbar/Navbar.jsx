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

function CustomNav(props) {

    const [sections, setSections] = useState([
        new Section('home', homeIcon),
        new Section('about', aboutIcon),
        new Section('skills', skillsIcon),
        new Section('projects', projectsIcon),
        new Section('contact', contactIcon),
      ])

    return (
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
                        {sections.map((section, i) => {
                            return (
                                <Nav.Link key={i} href={'#'+ section.name} className='d-flex align-items-center'>
                                    <section.icon className='nav-icon'/>
                                    <span>{section.name}</span>
                                </Nav.Link>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNav;