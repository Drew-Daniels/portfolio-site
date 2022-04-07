// react
import { useState } from 'react';

// styling
import './Projects.css';

// gifs
import MemoryCardGif from '../../images/gifs/memory-card.gif';
import BattleshipGif from '../../images/gifs/battleship.gif';
import EtchASketchGif from '../../images/gifs/etch-a-sketch.gif';
import TicTacToeGif from '../../images/gifs/tic-tac-toe.gif';
import TodoTitanGif from '../../images/gifs/todo-titan.gif';
import WeatherAppGif from '../../images/gifs/weather-app.gif';
import CVProjectGif from '../../images/gifs/cv-project.gif';

function Projects(props) {
    // TODO: Add in the ability to create project descriptions, and tech stack used?
    class Project {
        constructor(name, gif, techStack=[], description='') {
            this.name = name;
            this.gif = gif;
            this.techStack = techStack;
            this.description = description;
        }
    }

    const [projects, setProjects] = useState([
        new Project(
            'Memory Card', 
            MemoryCardGif,
            ['react', 'javascript', 'html'],
            'Memory Card game created with React'),
        new Project('Battleship', BattleshipGif),
        new Project('Etch-a-Sketch', EtchASketchGif),
        new Project('Tic Tac Toe', TicTacToeGif),
        new Project('Todo App', TodoTitanGif),
        new Project('Weather App', WeatherAppGif),
        new Project('CV Application', CVProjectGif)
    ])

    return (
        <div id='projects'>
            <h2 className='projects-header'>Projects</h2>
            <ul className='project-list'>
                {projects.map(function(project, i) {
                    return (
                        <li key={i} className='project'>
                        <h2>{project.name}</h2>
                        <div className='project-gif-container'>
                            <img src={project.gif} alt={project.name + ' gif'} className='project-gif' />
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Projects;
