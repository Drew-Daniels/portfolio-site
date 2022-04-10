import './About.css';
import Headshot from '../../images/pictures/headshot.jpg';
import { Container } from 'react-bootstrap';

function About(props) {

    return (
        <Container id='about'>
            <h2 className='about-header'>About Me</h2>
            <p>Blah blah blah</p>
            <div className='headshot-container'>
                <img src={Headshot} alt="Drew Daniels' Headshot" className='headshot'/>
            </div>
        </Container>
    )
}

export default About;
