// react
import { useState } from 'react';

// styling
import './Projects.css';

// gifs
import WWGif from '../../images/gifs/ww.gif';
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
            "Where's Waldo Photo-Tagging Game",
            WWGif,
            [
                'Firebase Firestore',
                'Firebase Storage',
                'Firebase Emulator',
                'React',
                'React Router',
                'Bootstrap',
            ],
            [
                "A Where's Waldo-style photo tagging app where users can choose between two distinct images and try to find all the required characters in record time - if their win is within the top 10 they can see their score on the leaderboards.",
                'Utilized Firebase Storage for storing images, Firebase Firestore for persisting character locations and game data, and the Firebase Emulator Suite to minimize actual read/writes against the production database during development.',
                'Used Jest testing library to incrementally test and develop features.'
            ],
            'https://drew-daniels-wheres-waldo.web.app/',
            'https://github.com/Drew-Daniels/ww',
        ),
        new Project(
            'Wall-to-Wall Wallpapers E-Commerce Site',
            W2WWallpapersGif,
            [
                'React',
                'React Router',
                'Bootstrap',
                'JavaScript',
                'Webpack'
            ],
            [
                'An E-commerce app that allows users to add/remove shop items to and from their cart, and adjust quantities as necessary.',
                'Applied React Router for client-side URL routing, React hooks to maintain and update state, and Bootstrap styling to create a sleek UI.',
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
                'A web app that collects user input for general info, professional and educational experience, and skills through forms, and generates a live preview & printable resume.'
            ],
            'https://drew-daniels.github.io/cv-project-hooks/',
            'https://github.com/Drew-Daniels/cv-project-hooks',
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
                'Weather app that displays a 7-day forecast for any city available through the OpenWeather REST API.',
                'Employed JavaScript to convert JSON API responses into JavaScript, Webpack to dynamically create HTML code, and CSS animations and media breakpoints to make the application reactive.'
            ],
            'https://drew-daniels.github.io/weather_app/',
            'https://github.com/Drew-Daniels/weather_app',
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
                'A to-do app that provides users with the ability to create and save projects, to-dos, and tasks through a UI created without the assistance of CSS frameworks such as Bootstrap or MUI.',
                "Uses the LocalStorage API to store all data on the client's browser cache and retrieve on later sessions.",
            ],
            'https://drew-daniels.github.io/todo_titan/',
            'https://github.com/Drew-Daniels/todo_titan',
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
                'A battleship game that gives players the ability to drag and drop their ships onto their board through the HTML5 Drag and Drop API.',
                "Players can attack their opponent by clicking on any tile on their opponent's board.",
                'Used the Jest framework to create unit-tests, following test-driven development and feature validation principles.',
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
                "A memory game that tests users' ability to recall what cards they have already clicked",
                "React is used to track which cards have been clicked, update the current score for the user, and shuffle the cards.",
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
                'Web app calculator that supports addition, subtraction, multiplication, and division operations.',
                'Calculations are performed through parsing user input via regular expressions and evaluating the result.',
                'Responds to user mouse clicks and keyboard events through DOM event-listeners.'
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
                'Tic Tac Toe App that gives players the option to play against an AI or another human, tracking the score and announcing the winner of each game',
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
                'Etch-a-Sketch App that provides users with the ability shade tiles through mouse-hover events.',
                'Uses a popup form to prompt the user to enter how many tiles they would like their etch-a-sketch container to display',
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
