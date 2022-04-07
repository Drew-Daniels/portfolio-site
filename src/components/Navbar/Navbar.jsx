import './Navbar.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';

// import logos
import { AiFillHome as homeIcon } from 'react-icons/ai';
import { BsInfoLg as aboutIcon } from 'react-icons/bs';
import { FaHammer as skillsIcon } from 'react-icons/fa';
import { BsCode as projectsIcon } from 'react-icons/bs';
import { IoMailSharp as contactIcon } from 'react-icons/io5';

class Section {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
  }

function Navbar(props) {

    const [sections, setSections] = useState([
        new Section('home', homeIcon),
        new Section('about', aboutIcon),
        new Section('skills', skillsIcon),
        new Section('projects', projectsIcon),
        new Section('contact', contactIcon),
      ])

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                {sections.map((section, i) => {
                    return (
                        <li key={i} className='navbar-list-item'>
                            <a href={"#" + section.name + ""} className='navbar-list-item-link'>
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <section.icon className='section-icon' />
                                </IconContext.Provider>
                                <span className='section-name'>{section.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;