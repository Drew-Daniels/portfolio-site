import './Contact.css';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
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
                    {icon()}
                    <span style={headerStyles}>Contact me</span>
                </Card.Header>
                <Card.Body>
                    <Form method='POST' data-netlify='true'>
                        <Row>
                            <Col>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label visuallyHidden>First Name</Form.Label>
                                    <Form.Control type='text' placeholder='First name' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label visuallyHidden>Last Name</Form.Label>
                                    <Form.Control type='text' placeholder='Last name' />
                                </Form.Group>                        
                            </Col>
                        </Row>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label visuallyHidden>Message</Form.Label>
                            <Form.Control type='text' as='textarea' rows={3} placeholder='Type message' />
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
