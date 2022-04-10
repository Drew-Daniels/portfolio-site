import './Navbar.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';

import { Navbar, Nav, Container } from 'react-bootstrap';
import myLogo from '../../images/icons/double-right-brackets.svg';

function CustomNav(props) {

    const {sections} = props;

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
                    <span className='nav-brand-name'>drew daniels</span>
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