import './About.css';
import Headshot from '../../images/pictures/headshot.jpg';
import { Container, Card, Image } from 'react-bootstrap';

function About(props) {

    const imageStyles = {
        marginRight: '1em',
        border: '3px solid #ffad41',
    }

    return (
        <Container id='about'>
            <Card>
                <Card.Header as='h2'>
                    <Image src={Headshot} thumbnail roundedCircle height={100} width={100} style={imageStyles}/>
                    <span>About me</span>
                </Card.Header>
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
