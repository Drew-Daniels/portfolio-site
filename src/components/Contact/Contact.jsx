import './Contact.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


function Contact() {

    return (
        <Container id='contact'>
            <h2>Contact me</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label visuallyHidden>First Name</Form.Label>
                            <Form.Control type='email' placeholder='First name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label visuallyHidden>Last Name</Form.Label>
                            <Form.Control type='email' placeholder='Last name' />
                        </Form.Group>                        
                    </Col>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label visuallyHidden>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Type message' />
                </Form.Group>
                <Button type='submit'>Send</Button>
            </Form>
        </Container>
        
    )
}

export default Contact;
