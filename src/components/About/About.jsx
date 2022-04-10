import './About.css';
import Headshot from '../../images/pictures/headshot.jpg';
import { Container, Card } from 'react-bootstrap';

function About(props) {

    return (
        <Container id='about'>
            {/* <h2 className='about-header'>About Me</h2>
            <p>Blah blah blah</p>
            <div className='headshot-container'>
                <img src={Headshot} alt="Drew Daniels' Headshot" className='headshot'/>
            </div> */}
            <Card>
                <Card.Header as='h2'>About Me</Card.Header>
                <Card.Body>
                    <Card.Title>Section 1</Card.Title>
                    <Card.Text>blahhhhh</Card.Text>
                    <Card.Title>Section 2</Card.Title>
                    <Card.Text>Blahhhh</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About;
