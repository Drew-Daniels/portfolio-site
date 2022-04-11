// react
import { useState } from 'react';

// styling
import './Projects.css';

// gifs
import MemoryCardGif from '../../images/gifs/memory-card-app.gif';
import BattleshipGif from '../../images/gifs/battleship.gif';
import EtchASketchGif from '../../images/gifs/etch-a-sketch.gif';
import TicTacToeGif from '../../images/gifs/tic-tac-toe.gif';
import TodoTitanGif from '../../images/gifs/todo-titan.gif';
import WeatherAppGif from '../../images/gifs/weather-app.gif';
import CVProjectGif from '../../images/gifs/cv-project.gif';
import CalculatorGif from '../../images/gifs/calculator.gif';

import { IconContext } from 'react-icons';
import { GoLinkExternal as LiveIcon } from 'react-icons/go';
import { BsGithub as GithubIcon } from 'react-icons/bs';

import { Container, Card, Badge, Button } from 'react-bootstrap';

function Projects(props) {

    const {icon} = props;

    class Project {
        constructor(name, gif, techStack=[], blurbs=[], liveURL, sourceURL) {
            this.name = name;
            this.gif = gif;
            this.techStack = techStack;
            this.blurbs = blurbs;
            this.liveURL = liveURL;
            this.sourceURL = sourceURL;
        }
    }

    const [projects, setProjects] = useState([
        new Project(
            'Memory Card', 
            MemoryCardGif,
            [
                'react', 
                'javascript',
                'html'
            ],
            [
                'Memory Card game created with React',
            ],
            'https://drew-daniels.github.io/memory-card/',
            'https://github.com/Drew-Daniels/memory-card',
        ),
        new Project(
            'Battleship',
            BattleshipGif,
            [
                'jest',
                'webpack',
            ],
            [   
                'Utilized CSS media queries to create a responsive battleship application.',
                'Created automated unit tests with the Jest framework to generate mockup scenarios and follow test-driven development and feature validation principles.',
            ],
            'https://drew-daniels.github.io/battleship/',
            'https://github.com/Drew-Daniels/battleship',
        ),
        new Project(
            'Etch-a-Sketch',
            EtchASketchGif,
            [
                'html',
                'css',
                'javascript',
            ],
            [
                'Etch-a-Sketch description here',
            ],
            'https://drew-daniels.github.io/etch-a-sketch/',
            'https://github.com/Drew-Daniels/etch-a-sketch',
        ),
        new Project(
            'Tic Tac Toe',
            TicTacToeGif,
            [
                'html',
                'css',
                'javascript',
            ],
            [
                'Tic Tac Toe description here',
            ],
            'https://drew-daniels.github.io/tic-tac-toe/',
            'https://github.com/Drew-Daniels/tic-tac-toe',
        ),
        new Project(
            'Todo App',
            TodoTitanGif,
            [
                'webpack',
                'eslint',
                'html',
                'css',
                'javascript',
                'localstorage-api',
            ],
            [
                'Made use of LocalStorage API to store and retrieve user-specific projects, to-dos, and tasks created from the UI on the client-side - ensuring speed and scalability for users.',
                'UI on the client-side - ensuring speed and scalability for users.'
            ],
            'https://drew-daniels.github.io/todo_titan/',
            'https://github.com/Drew-Daniels/todo_titan',
        ),
        new Project(
            'Weather App', 
            WeatherAppGif,
            [
                'webpack',
                'openweathermap-api',
            ],
            [
                'Employed Webpack to dynamically generate JavaScript code used to fetch updated daily weather metrics for any city',
                'JSON data obtained from the OpenWeather REST API and displayed in a sleek UI'
            ],
            'https://drew-daniels.github.io/weather_app/',
            'https://github.com/Drew-Daniels/weather_app',
        ),
        new Project(
            'CV Application',
            CVProjectGif,
            [
                'react',
                'html',
                'css',
                'javascript',
                'webpack',
            ],
            [
                'Implemented React hooks to update state in response to user inputs.',
                'Used git and GitHub Pages for continuous integration and deployment (CI/CD)'
            ],
            'https://drew-daniels.github.io/cv-project-hooks/',
            'https://github.com/Drew-Daniels/cv-project-hooks',
        ),
        new Project(
            'Calculator',
            CalculatorGif,
            [
                'html',
                'css',
                'javascript',
            ],
            [
                'Calculator App',
            ],
            'https://drew-daniels.github.io/calculator/',
            'https://github.com/Drew-Daniels/calculator',
        ),
    ])

    const headerStyles = {
        marginLeft: '1em'
    }

    return (
        <Container id='projects'>
            <Card>
                <Card.Header as='h2'>
                    <IconContext.Provider value={{ color: 'orange' }}>
                        {icon()}
                    </IconContext.Provider>
                    <span style={headerStyles}>Projects</span>
                </Card.Header>
                <Card.Body>
                    <ul className='project-list'>
                        {projects.map(function(project, i) {
                            return (
                                <li key={i} className='project'>
                                    <Card>
                                        <Card.Header as='h3' className='project-header'>{project.name}</Card.Header>
                                        <Card.Body>
                                            <ul className='project-blurbs'>
                                                {project.blurbs.map((blurb, i) => {
                                                        return (<li key={i} className='project-blurb'><Card.Text>{blurb}</Card.Text></li>)
                                                })}
                                            </ul>
                                            <ul>
                                                {project.techStack.map((stackItem, i) => {
                                                    return (<li key={i}><Badge pill bg='warning'>{stackItem}</Badge></li>)
                                                })}
                                            </ul>
                                            <Card.Img src={project.gif} alt={project.name + ' gif'} className='project-gif' />
                                            <Button variant='link' href={project.liveURL} target='_blank'>
                                                <IconContext.Provider value={{ color: '#ffad41', size:'1.5em'}} >
                                                    <LiveIcon />
                                                </IconContext.Provider>
                                            </Button>
                                            <Button variant='link' href={project.sourceURL} target='_blank'>
                                                <IconContext.Provider value={{ color: '#ffad41', size:'1.5em'}} >
                                                    <GithubIcon />
                                                </IconContext.Provider>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Projects;
