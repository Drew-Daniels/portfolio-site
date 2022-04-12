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
                    {/* Intro */}
                    <Card.Title>Hey there!</Card.Title>
                    <Card.Text>
                        I'm a self-taught, full-stack developer based out of Austin, TX that started learning to code in March 2020.
                    </Card.Text>
                    {/* Coding Story */}
                    <Card.Title>Why I started coding</Card.Title>
                    <Card.Text>
                            My journey with programming started while under lockdown - namely watching a few online tutorials on Excel VBA to automate some
                            manual processes at my work as a supply chain data analyst. It was not much longer after that I found myself obsessed with learning how to automate everything.
                    </Card.Text>
                    <Card.Text>
                            After impressing my coworkers with my computer wizardry, I decided to move onto Python to <strong>really</strong> learn programming. 
                            However, after reading and watching many books {"&"} tutorials on Python and playing around with a couple Raspberry Pis, 
                            I felt I needed a more rigorous path in place if I really wanted to transition from Supply Chain Management to Software Development.                   
                    </Card.Text>                            
                    <Card.Text>
                        In July 2021 I found <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>The Odin Project</a> - a free, online and open-source course software development curriculum, where, once completed, you should have the skills necessary to be hired as a professional full stack developer.
                            Most of the projects you'll find here at the moment are from this course, and I intend to keep adding more as they are completed. 
                    </Card.Text>
                    {/* Hobbies */}
                    <Card.Title>Outside of coding...</Card.Title>
                    <Card.Text>
                        I go outside and do stuff! I am an amateur mountain biker, occasional backpacker, singer and guitarist, home cook, and self-effacing coffee snob.
                    </Card.Text>
                    {/* Outro */}
                    <Card.Title>Take a look around</Card.Title>
                    <Card.Text>
                        Feel free to <a href='#contact'>reach out</a> if you have any feedback/questions on my projects, or if you would like to talk jobs (!)
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About;
