import './Contact.css';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { IoIosSend as SendIcon} from 'react-icons/io';

function Contact(props) {

    const {icon} = props;

    const headerStyles = {
        marginLeft: '1em'
    }

    return (
        <Container id='contact'>
            <Card>
                <Card.Header as='h2'>
                    <IconContext.Provider value={{ color: 'orange' }}>
                        {icon()}
                    </IconContext.Provider>
                    <span style={headerStyles}>Contact me</span>
                </Card.Header>
                <Card.Body>
                    <Form name='contact' method='post'>
                        <input type="hidden" name="form-name" value="contact" />
                        <Row>
                            <Col>
                                <Form.Group className='mb-3' controlId='first-name'>
                                    <Form.Label visuallyHidden>First Name</Form.Label>
                                    <Form.Control 
                                        name='firstName'
                                        type='text' 
                                        placeholder='First name'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='mb-3' controlId='last-name'>
                                    <Form.Label visuallyHidden>Last Name</Form.Label>
                                    <Form.Control
                                        name='lastName'
                                        type='text'
                                        placeholder='Last name'
                                        required
                                    />
                                </Form.Group>                        
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className='mb-3' controlId='phone'>
                                    <Form.Label visuallyHidden>Phone Number</Form.Label>
                                    <Form.Control
                                        name='phone'
                                        type='tel'
                                        placeholder='XXX-XXX-XXXX'
                                        required
                                    />
                                </Form.Group>                        
                            </Col>
                            <Col>
                                <Form.Group className='mb-3' controlId='email'>
                                    <Form.Label visuallyHidden>Email</Form.Label>
                                    <Form.Control
                                        name='email'
                                        type='email'
                                        placeholder='youremail@here.com'
                                        required
                                    />
                                </Form.Group>                        
                            </Col>
                        </Row>
                        <Form.Group className='mb-3' controlId='message'>
                            <Form.Label visuallyHidden>Message</Form.Label>
                            <Form.Control 
                                name='message'
                                type='text' 
                                as='textarea' 
                                rows={3} 
                                placeholder='Type message'
                            />
                        </Form.Group>
                        <Button variant='warning' type='submit'>
                            <span>Send</span>
                            <SendIcon style={{marginLeft: '.25em'}}/>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        
    )
}

export default Contact;
