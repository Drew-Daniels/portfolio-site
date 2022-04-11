import './About.css';
import Headshot from '../../images/pictures/headshot.jpg';
import { Container, Card, Image } from 'react-bootstrap';
import { sections } from './text';

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
                    {sections.map((section, i) => {
                        return (
                            <div key={i} className='card-section'>
                                <Card.Title>{section.title}</Card.Title>
                                {section.paragraphs.map((paragraph, i) => {
                                    return (
                                        <Card.Text key={i}>{paragraph}</Card.Text>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About;
