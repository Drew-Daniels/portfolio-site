// react
import { useState } from 'react';

// styling
import './Projects.css';

// gifs
import W2WWallpapersGif from '../../images/gifs/w2w-wallpapers.gif';
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

import { Container, Card, Badge, ButtonGroup, Button } from 'react-bootstrap';

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
            'Wall-to-Wall Wallpapers E-Commerce Site',
            W2WWallpapersGif,
            [
                'React',
                'React-router-dom',
                'React-bootstrap',
                'Bootstrap',
                'JavaScript',
                'Webpack'
            ],
            [
                'Utilized react-router-dom to handle URL navigation launched by user-interaction with the store-front UI.',
                'Used React hooks to maintain and update application and component state.'
            ],
            'https://drew-daniels.github.io/w2w-wallpapers/',
            'https://github.com/Drew-Daniels/w2w-wallpapers',
        ),
        new Project(
            'CV Application',
            CVProjectGif,
            [
                'React',
                'React-bootstrap',
                'Bootstrap',
                'JavaScript',
                'Webpack',
            ],
            [
                'Implemented React hooks to update state in response to user inputs.',
                'Used git and GitHub Pages for continuous integration and deployment (CI/CD)'
            ],
            'https://drew-daniels.github.io/cv-project-hooks/',
            'https://github.com/Drew-Daniels/cv-project-hooks',
        ),
        new Project(
            'Todo App',
            TodoTitanGif,
            [
                'JavaScript',
                'LocalStorage API',
                'Webpack',
                'Eslint',
                'HTML',
                'CSS',
            ],
            [
                'Made use of LocalStorage API to store and retrieve user-specific projects, to-dos, and tasks created from the UI on the client-side - ensuring speed and scalability for users.',
            ],
            'https://drew-daniels.github.io/todo_titan/',
            'https://github.com/Drew-Daniels/todo_titan',
        ),
        new Project(
            'Weather App', 
            WeatherAppGif,
            [
                'JavaScript',
                'Webpack',
                'OpenWeatherMap API',
            ],
            [
                'Employed Webpack to dynamically generate JavaScript code used to fetch updated daily weather metrics for any city',
                'JSON data obtained from the OpenWeather REST API and displayed in a sleek UI'
            ],
            'https://drew-daniels.github.io/weather_app/',
            'https://github.com/Drew-Daniels/weather_app',
        ),
        new Project(
            'Battleship',
            BattleshipGif,
            [
                'JavaScript',
                'Jest',
                'Webpack',
                'HTML',
                'CSS'
            ],
            [   
                'Utilized CSS media queries to create a responsive battleship application.',
                'Created automated unit tests with the Jest framework to generate mockup scenarios and follow test-driven development and feature validation principles.',
            ],
            'https://drew-daniels.github.io/battleship/',
            'https://github.com/Drew-Daniels/battleship',
        ),
        new Project(
            'Memory Card', 
            MemoryCardGif,
            [
                'React hooks', 
                'JavaScript',
            ],
            [
                'Memory card game created with React',
            ],
            'https://drew-daniels.github.io/memory-card/',
            'https://github.com/Drew-Daniels/memory-card',
        ),
        new Project(
            'Calculator',
            CalculatorGif,
            [
                'JavaScript',
                'HTML',
                'CSS',
            ],
            [
                'Calculator App',
            ],
            'https://drew-daniels.github.io/calculator/',
            'https://github.com/Drew-Daniels/calculator',
        ),
        new Project(
            'Tic Tac Toe',
            TicTacToeGif,
            [  
                'JavaScript',
                'HTML',
                'CSS',
            ],
            [
                'Tic Tac Toe App',
            ],
            'https://drew-daniels.github.io/tic-tac-toe/',
            'https://github.com/Drew-Daniels/tic-tac-toe',
        ),
        new Project(
            'Etch-a-Sketch',
            EtchASketchGif,
            [
                'JavaScript',
                'HTML',
                'CSS',
            ],
            [
                'Etch-a-Sketch App',
            ],
            'https://drew-daniels.github.io/etch-a-sketch/',
            'https://github.com/Drew-Daniels/etch-a-sketch',
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
                                        <Card.Header as='h3' className='project-header'>
                                            {project.name}
                                            <ButtonGroup>
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
                                            </ButtonGroup>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className='project-blurbs'>
                                                {project.blurbs.map((blurb, i) => {
                                                        return (<li key={i} className='project-blurb'><Card.Text>{blurb}</Card.Text></li>)
                                                })}
                                            </ul>
                                            <ul className='tech-stack'>
                                                {project.techStack.map((stackItem, i) => {
                                                    return (<li key={i} style={{ paddingRight: '.25em' }} ><Badge pill bg='warning'>{stackItem}</Badge></li>)
                                                })}
                                            </ul>
                                            <Card.Img src={project.gif} alt={project.name + ' gif'} className='project-gif' />

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
