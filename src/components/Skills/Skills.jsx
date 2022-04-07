import { useState } from 'react';
import './Skills.css';

class Skill {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
  }

function Skills(props) {

    const [skills, setSkills] = useState([
        new Skill('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'),
        new Skill('HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'),
        new Skill('CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'),
        new Skill('Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
        // // new Skill('Pug', pugIcon),
        new Skill('React','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'),
        new Skill('Bootstrap','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'),
        new Skill('Sass', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'),
        new Skill('Jest', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'),
        new Skill('MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'),
        new Skill('NodeJS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'),
        new Skill('NPM', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'),
        new Skill('git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'),
        new Skill('Webpack', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'),
        new Skill('Babel', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg'),
        new Skill('Express', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'),
    ]);

    return (
        <div id='skills'>
            <ul className='skills-list'>
                {skills.map((skill, i) => {
                    const {name, icon} = skill;
                    return (
                        <li key={i} className='skill'>
                            <img src={icon} alt={name + ' icon'} className='skill-image' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Skills;
